import { Component, Input } from '@angular/core';
import { Pokemon } from './pokemon/pokemon.model';
import { NgClass } from '@angular/common';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening4';
  pokemonList: Pokemon[];
  selectedPokemon: Pokemon;

  constructor(private service : PokemonService) {
    this.pokemonList = service.pokemonList;
  }

  handleData(event: Pokemon) {
    this.selectedPokemon = event;
  }
}
