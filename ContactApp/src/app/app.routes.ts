import {Routes} from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

export const appRoutes: Routes = [
    { path: 'contact/:id', component: ContactDetailComponent },
    { path: 'add', component: AddContactComponent },
    { path: 'list', component: ContactListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];