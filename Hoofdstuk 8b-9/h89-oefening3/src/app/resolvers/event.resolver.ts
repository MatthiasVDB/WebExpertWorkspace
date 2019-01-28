import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EventResolve implements Resolve<Event> {
    
    constructor(private service : EventService, private router : Router) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getEvent(+route.paramMap.get('id'));
    }
}