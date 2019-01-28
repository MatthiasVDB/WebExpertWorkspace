import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { EventDetailComponent } from './event-detail/event-detail.component';
import { Error404Component } from './error404/error404.component';
import { EventResolve } from './resolvers/event.resolver';
import { RemoveEventComponent } from './remove-event/remove-event.component';
import { CanActivateViaConfirmationGuard } from './services/confirmation-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventListComponent,
    EventComponent,
    EventDetailComponent,
    Error404Component,
    RemoveEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService, EventResolve, CanActivateViaConfirmationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
