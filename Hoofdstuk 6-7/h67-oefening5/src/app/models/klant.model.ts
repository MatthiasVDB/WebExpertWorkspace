export class Klant {
    voornaam : string;
    achternaam: string;
    email : string;
    straatnaam : string;
    huisnummer : number;
    postcode : number;
    gemeente : string;

    constructor(voornaam : string, achternaam : string, email : string, straatnaam : string, huisnummer : number, postcode : number, gemeente : string) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.email = email;
        this.straatnaam = straatnaam;
        this.huisnummer = huisnummer;
        this.postcode = postcode;
        this.gemeente = gemeente;
    }
}