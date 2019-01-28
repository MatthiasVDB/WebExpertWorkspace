import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remove-event',
  templateUrl: './remove-event.component.html',
  styleUrls: ['./remove-event.component.css']
})
export class RemoveEventComponent implements OnInit {

  constructor(private service : EventService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.service.removeEvent(this.route.snapshot.params['id']);
    alert("Event deleted");
    this.router.navigate(['']);
  }

}
