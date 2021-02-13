import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import {catchError} from "rxjs/operators"
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
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
            //Erro no client ou rede
            console.error('Ocorreu um erro:', error.error.message)
        } else {
            //Erro retornado pelo backend
            console.error(
                `Código do erro ${error.status}, ` +
                `Erro: ${JSON.stringify(error.error)}` 
            );
        }

        //Retorna um Observable com uma mensagem
        return throwError('Ocorreu um erro, tente novamente.');
    }
}