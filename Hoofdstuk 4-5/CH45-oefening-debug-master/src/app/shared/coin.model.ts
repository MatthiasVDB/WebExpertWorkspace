export class Coin{
    name: string;
    val: number;
    marketCap: number;

    constructor(name: string, val: number, marketCap: number){
        this.name = name;
        this.val = val;
        this.marketCap = marketCap
    }
}