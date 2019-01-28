export class Hero {
    id: string;
    abilities: string[];
    avatar: string;
    class: string;
    difficulty: number;
    dps: number;
    name: string;

    constructor(id: string, abilities: string[], avatar: string, heroclass: string, difficulty: number, dps: number, name: string) {
        this.id = id;
        this.abilities = abilities;
        this.avatar = avatar;
        this.class = heroclass;
        this.difficulty = difficulty;
        this.dps = dps;
        this.name = name;
    }
}