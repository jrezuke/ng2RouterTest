import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SecurityService } from '../security/security.service';

@Injectable()
export class SecurityGuard implements CanActivate {
  constructor(private _security: SecurityService, private router: Router) {}

  canActivate() {

      if (this._security.IsAuthorized) {
          return true;
      }

      this.router.navigate(['/logon'])
  }
}