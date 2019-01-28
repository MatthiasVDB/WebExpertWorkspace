import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { KlantenService } from './services/klant.service';
import { KlantComponent } from './klant/klant.component';
import { NewKlantComponent } from './new-klant/new-klant.component';

@NgModule({
  declarations: [
    AppComponent,
    KlantComponent,
    NewKlantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [KlantenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
