import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from '../security/security.service';

@Injectable()
export class SecurityGuard implements CanActivate {
  constructor(private _security: SecurityService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log("route:", route);
      console.log("state:", state);
      if (this._security.IsAuthorized) {
          return true;
      }
      this._security.RedirectUrl = state.url;
      this.router.navigate(['/logon']);
  }
}