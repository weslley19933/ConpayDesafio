import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "../services/login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.loginService.getAuthToken();

        let request: HttpRequest<any> = req;

        if(token) {

            /*Como o request é imutável, é preciso fazer um clone
            para mudar as suas propriedades e passar o token com Authorization Bearer*/

            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        //Retorna o request com o erro tratado
        return next.handle(request)
    }
}