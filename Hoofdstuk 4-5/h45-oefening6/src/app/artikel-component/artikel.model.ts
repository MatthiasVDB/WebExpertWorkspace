export class Artikel {
    artikelNummer: Number;
    artikelNaam: string;
    aankoopprijs: number;
    verkoopprijs: number;
    afbeelding: string;

    constructor(artikelNummer: Number, artikelNaam: string, aankooprijs: number, verkoopprijs: number, afbeelding: string){
        this.artikelNummer = artikelNummer;
        this.artikelNaam = artikelNaam;
        this.aankoopprijs = aankooprijs;
        this.verkoopprijs = verkoopprijs;
        this.afbeelding = afbeelding;
    }
}