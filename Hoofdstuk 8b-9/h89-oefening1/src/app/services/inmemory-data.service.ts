import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id : 1, abilities : ["Heavy pulse rifle","Helix rockets","Sprint","Biotic field","Tactical visor"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/hero-select-portrait.png", class : "Offense", difficulty : 1, dps : 170, name : "soldier 76"},
            { id : 2, abilities : ["Storm bow","Sonic arrow","Scatter arrow","Dragon strike"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/hero-select-portrait.png", class : "Defence", difficulty : 3, dps : 92.5, name : "Hanzo"},
            { id : 3, abilities : ["Rocket hammer","Barrier field","Charge","Fire strike","Earthshatter"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/hero-select-portrait.png", class : "Tank", difficulty : 1, dps : 75, name : "Reinhardt"},
            { id : 4, abilities : ["Sonic amplifier","Crossfade","Amp it up","Sound barrier"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/hero-select-portrait.png", class : "Support", difficulty : 2, dps : 75, name : "Lucio"},
            { id : 5, abilities : ["Shuriken","Deflect","Swift strike","Dragonblade"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/hero-select-portrait.png", class : "Offense", difficulty : 3, dps : 86.5, name : "Genji"},
            { id : 6, abilities : ["Biotic Rifle","Sleep dart","Biotic grenade","Nano boost"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/hero-select-portrait.png", class : "Support", difficulty : 2, dps : 28, name : "Ana"},
            { id : 7, abilities : ["Rocket launcher","Jump jet","Concussive blast","Barrage"], avatar : "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png", class : "Offense", difficulty : 1, dps : 120, name : "Pharah"}
        ]
        
        return { heroes };
        
      }
}