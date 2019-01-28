import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { GetallenComponent } from './getallen/getallen.component';
import { CanDeactivateButtonClickGuard } from './services/button-deactivator.service';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'info', component: InfoComponent, canDeactivate: [CanDeactivateButtonClickGuard]},
    { path: 'getal/:id', component: GetallenComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];