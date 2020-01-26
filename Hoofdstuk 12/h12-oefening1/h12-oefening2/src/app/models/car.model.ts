export class Car {
    _id : string;
    manufacturer : string;
    model : string;
    price : number;
    wiki : string;

    constructor(manufacturer : string, model : string, price : number, wiki : string) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.wiki = wiki;
     }
}