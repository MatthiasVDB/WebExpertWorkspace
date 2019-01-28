import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from './services/Hero.service';
import { Hero } from './models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h89-oefening1';
  heros : Hero[];
  heroList : Hero[];
  name: string;
  selectedRating: string;

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.fetchHeroList();
  }

  fetchHeroList() : void {
    this.heroService.getHeroList().subscribe(data => {
      this.heros = data;
      this.heroList = data;
    });
  }

  handleNameFilter(event : string) : void {
    this.name = event;
    this.heroList = this.heroService.filterHerosByName(this.heros, this.name);
  }

  handleRatingFilter(event : string) : void {
    this.selectedRating = event;
    this.heroList = this.heroService.filterHerosByDifficulty(this.heros, this.selectedRating);
  }

}
