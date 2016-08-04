import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {
    public IsAuthorized: boolean;
    public RedirectUrl: string;
    
    constructor() {

    }

    authorizeUser (userName:string, password:string):boolean {
        if (userName === "jojo" && password === "jojo") {
            this.IsAuthorized = true;
            return true;
        }

        this.IsAuthorized = false;
        return false;

    }

    logoutUser() {
        this.IsAuthorized = false;
    }
}