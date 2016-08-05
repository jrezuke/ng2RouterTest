import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { LogonComponent } from './security/logon.component';
import { LogoutComponent } from './security/logout.component';
import { SecurityGuard } from './security/security.guard'

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent, canActivate : [SecurityGuard]},
    { path: 'logon', component: LogonComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'about' , component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];