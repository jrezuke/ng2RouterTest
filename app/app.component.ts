import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, NavigationStart} from '@angular/router';
import { SecurityService } from './security/security.service'
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html',
    cssUrl: 'app/app.component.css'

})
export class AppComponent implements OnInit {
    previousPath: string;
    currentPath: string;

    constructor(private _security: SecurityService, private _router: Router) { }

    ngOnInit() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                console.log("event:", event);
                this.onPathChange(event.url);
            }
        });

    }

    onPathChange(path: string) {

        if (this.currentPath) {
            this.previousPath = this.currentPath;
        }
        this.currentPath = path;
        if (this._security.IsAuthorized) {

        }
        else {

        }
    }
}
