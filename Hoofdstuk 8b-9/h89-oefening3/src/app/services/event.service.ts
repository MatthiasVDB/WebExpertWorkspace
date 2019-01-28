import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {
    id: number = 3; 
    events: Event[] = [
        new Event(1, 'event1', '2019-02-15', 'event1adres'),
        new Event(2, 'event2', '2019-02-17', 'event2adres')
    ];

    constructor() {}

    getEvents() {
        return this.events;
    }

    getEvent(id : number) {
        return this.events.find(e => e.id == id);
    }

    addEvent(event : Event) {
        this.events.push(event);
        this.id++;
    }

    removeEvent(id :number) {
        let event : Event = this.events.find(e => e.id == id);
        let position : number = this.events.indexOf(event);
        this.events.splice(position, 1);
    }
}
