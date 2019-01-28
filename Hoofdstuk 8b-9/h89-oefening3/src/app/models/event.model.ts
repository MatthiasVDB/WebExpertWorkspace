export class Event{
    id: number;
    titel: string;
    datum: string;
    adres: string;

    constructor(id: number, titel: string, datum: string, adres: string){
        this.id = id;
        this.titel = titel;
        this.datum = datum;
        this.adres = adres;
    }
}