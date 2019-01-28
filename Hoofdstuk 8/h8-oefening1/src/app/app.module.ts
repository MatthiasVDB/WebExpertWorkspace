import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
import { HeroService } from './services/Hero.service';
import { HttpClientModule } from '@angular/common/http';
import { GenerateStarsPipe } from './pipes/generate-stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SearchComponent,
    GenerateStarsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
