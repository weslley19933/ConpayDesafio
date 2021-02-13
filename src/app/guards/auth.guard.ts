import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
       /*Verifica se tem token no localStorage e se o token está expirado
        Se sim, habilita a navegação para a página de Pagamentos
        Se não, redireciona para a Página de Login*/
      if(this.loginService.isUserLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
    }
}
