import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from './security.service'

@Component({
    selector: 'qs-logon',
    templateUrl: 'app/security/logon.component.html'
})
export class LogonComponent implements OnInit {
    userName: string;
    password: string;
    message: string;

    constructor(private _security: SecurityService) { }

    ngOnInit() { }

    onSubmit( ) {

        if (this._security.authorizeUser(this.userName, this.password)) {
            this.message = "user is authorized"
        }
        else {
            this.message = "user is not authorized"
        }
    }
}