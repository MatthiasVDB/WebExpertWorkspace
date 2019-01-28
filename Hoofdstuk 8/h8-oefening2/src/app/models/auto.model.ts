export class Auto {
    id: string;
    bouwjaar: number;
    merk: string;
    prijs: number;
    stock: number;
    type: string;

    constructor(bouwjaar: number, merk: string, prijs: number, stock: number, type: string, id?: string) {
        this.id = id;
        this.bouwjaar = bouwjaar;
        this.merk = merk;
        this.prijs = prijs;
        this.stock = stock;
        this.type = type;
    }

}