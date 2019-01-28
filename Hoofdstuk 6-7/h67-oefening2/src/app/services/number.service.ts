import { Injectable } from "@angular/core";

@Injectable()
export class NumberService {
    id : number = 0;

    constructor() { }

    next() : number {
        return ++this.id;
    }
}