export class Pokemon {
    name: string;
    pokeType: string;
    pokemonImg: string;
    index: number;

    constructor(name: string, pokeType: string, pokemonImg = 'assets/avatar.png', index: number) {
        this.name = name;
        this.pokeType = pokeType;
        this.pokemonImg = pokemonImg;
        this.index = index;
    }
}