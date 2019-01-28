import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventList: Event[] = [];

  constructor(private service: EventService, private router : Router) { }

  ngOnInit() {
    this.eventList = this.service.getEvents();
  }

  goToCreateEvent() : void {
    this.router.navigate(['/create']);
  }

}
