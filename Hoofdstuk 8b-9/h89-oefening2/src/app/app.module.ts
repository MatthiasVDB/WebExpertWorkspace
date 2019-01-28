import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { GetallenComponent } from './getallen/getallen.component';
import { CanDeactivateButtonClickGuard } from './services/button-deactivator.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    GetallenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CanDeactivateButtonClickGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
