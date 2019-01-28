import { Component, Input } from '@angular/core';
import { Pokemon } from './pokemon/pokemon.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening4';
  pokemonList: Pokemon[] = [
    new Pokemon("Bulbasaur", "Grass", "assets/bulbasaur.png", 1),
    new Pokemon("Ivysaur", "Grass", "assets/ivysaur.png", 2),
    new Pokemon("Venusaur", "Grass", "assets/venusaur.png", 3),
    new Pokemon("Charmander", "Fire", "assets/charmander.png", 4),
    new Pokemon("Charmeleon", "Fire", "assets/charmeleon.png", 5),
    new Pokemon("Charizard", "Fire", "assets/charizard.png", 6),
    new Pokemon("Squirtle", "Water", "assets/squirtle.png", 7),
    new Pokemon("Wartortle", "Water", "assets/wartortle.png", 8),
    new Pokemon("Blastoise", "Water", "assets/blastoise.png", 9),
  ];
  selectedPokemon: Pokemon;

  handleData(event: Pokemon) {
    this.selectedPokemon = event;
  }
}
