import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtikelComponentComponent } from './artikel-component/artikel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtikelComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
