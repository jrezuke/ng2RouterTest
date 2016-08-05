import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { SecurityService } from './security/security.service'
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html'

})
export class AppComponent implements OnInit {


    constructor(private _security: SecurityService) { }

    ngOnInit() {
    
    }
}
