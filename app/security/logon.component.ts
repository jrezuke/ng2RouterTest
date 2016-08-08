import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from './security.service';
import { Router } from '@angular/router';

@Component({
    selector: 'qs-logon',
    templateUrl: 'app/security/logon.component.html'
})
export class LogonComponent implements OnInit {
    //userName: string;
    //password: string;
    message: string;
    redirectUrl: string;

    constructor(private _security: SecurityService, private _router: Router) { }

    ngOnInit() {
        if (this._security.RedirectUrl) {
            this.redirectUrl = this._security.RedirectUrl;
        }
        else {
            this.redirectUrl = "";
        }
    }

    onSubmit(form:any) {

        if (this._security.authorizeUser(form.userName, form.password)) {
            this.message = "user is authorized"
            if (this._security.RedirectUrl) {
                this._router.navigate([this._security.RedirectUrl]);
            }
        }
        else {
            this.message = "user is not authorized"
        }
    }
}