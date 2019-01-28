import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

    @Input() pokemon: Pokemon;
    @Output() onSelect: EventEmitter<Pokemon> = new EventEmitter();

    select() {
        this.onSelect.emit(this.pokemon);
    }

}
