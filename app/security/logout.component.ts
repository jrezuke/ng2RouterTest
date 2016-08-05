import { Component, OnInit } from '@angular/core';
import { SecurityService } from './security.service';

@Component({
    selector: 'qs-logout',
    templateUrl: 'app/security/logout.component.html'
})
export class LogoutComponent implements OnInit {
    constructor(private _security: SecurityService) { }

    ngOnInit() { }

    onLogout() {
        this._security.RedirectUrl = "";
        this._security.logoutUser();
    }

}