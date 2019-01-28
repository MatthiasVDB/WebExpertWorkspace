import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { Error404Component } from './error404/error404.component';
import { EventResolve } from './resolvers/event.resolver';
import { RemoveEventComponent } from './remove-event/remove-event.component';
import { CanActivateViaConfirmationGuard } from './services/confirmation-activator.service';

const routes: Routes = [
  {path: 'event/:id', component: EventDetailComponent, resolve: { event : EventResolve }},
  {path: 'remove/:id', component: RemoveEventComponent, canActivate: [CanActivateViaConfirmationGuard]},
  {path: 'create', component: CreateEventComponent},
  {path: 'list', component: EventListComponent},
  {path: '404', component: Error404Component},
  {path: '', component: EventListComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
