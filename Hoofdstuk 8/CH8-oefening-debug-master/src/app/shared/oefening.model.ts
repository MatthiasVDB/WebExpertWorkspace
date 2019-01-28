export class Oefening{
    id: number;
    name: string;
    course: string;
    link: string;
    finished: boolean;

    constructor(id: number, name: string, course: string, link: string, finished: boolean = false){
        this.id = id;
        this.name = name;
        this.course = course;
        this.link = link;
        this.finished = finished;
    }
    
}