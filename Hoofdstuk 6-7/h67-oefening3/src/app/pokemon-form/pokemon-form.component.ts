import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  options: string[];
  form: FormGroup;

  constructor(private service : PokemonService) { }

  ngOnInit() {
    this.options = [
      "Grass",
      "Fire",
      "Water"
    ];

    this.form = new FormGroup({
      'name' : new FormControl(null, [Validators.required,
      Validators.minLength(3)]),
      'number' : new FormControl(null, [Validators.required]),
      'avatar' : new FormControl(null),
      'pokemonType' : new FormControl(null, [Validators.required])
    });
  }

  add(form : FormGroup): void {
    let pokemon: Pokemon = new Pokemon(
        form.value.name,
        form.value.pokemonType,
        form.value.avatar,
        form.value.number
    );
    form.reset();
    this.service.add(pokemon);
}

}
