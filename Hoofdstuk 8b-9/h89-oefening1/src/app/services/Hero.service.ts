import { Injectable } from "@angular/core";
import { Hero } from '../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
    private heroUrl: string;
 
    constructor(private http: HttpClient) {
        this.heroUrl = 'api/heroes';
     }
 
    getHeroList(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroUrl);
    }

    filterHerosByDifficulty(heros: Hero[], difficulty: string): Hero[] {
        if (difficulty === "All") {
            return heros;
        }
        return heros.filter(hero => hero.difficulty == parseInt(difficulty));
    }

    filterHerosByName(heros: Hero[], name: string): Hero[] {
        if (!name) {
            return heros;
        }
        return heros.filter(hero => hero.name.includes(name));
    }
}