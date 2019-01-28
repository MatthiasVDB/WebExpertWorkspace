import { Injectable } from '@angular/core';
import { Klant } from '../models/klant.model';

@Injectable()
export class KlantenService {
    private klanten: Klant[] = [
        new Klant('John', 'Snow', 'john.snow@winterfell.be', 'bastardavenue', 2, 3910, 'Winterfell'), 
        new Klant('Jamie', 'Lannister', 'jamie.lannister@kingslanding.be', 'palace', 1, 4930, 'Kings Landing')
    ];
    
    constructor() {}

    getKlanten() : Klant[] {
        return this.klanten;
    }

    addKlant(klant: Klant) {
        this.klanten.push(klant);
    }

    deleteKlant(index: number){
        this.klanten.splice(index, 1);
    }
    
    
}