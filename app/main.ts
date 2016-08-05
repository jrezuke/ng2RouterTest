import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { SecurityService } from '../app/security/security.service';
import { SecurityGuard } from '../app/security/security.guard';

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS,
    SecurityService,
    SecurityGuard,
                        disableDeprecatedForms(),
                        provideForms()])
    .catch(err => console.error(err));
