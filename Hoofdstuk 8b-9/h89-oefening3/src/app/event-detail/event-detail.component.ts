import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event : Event;

  constructor(private route : ActivatedRoute, private router : Router) { 
    this.event = this.route.snapshot.data['event'];

    if (this.event == null)
     this.router.navigate(['/404']);
  }

  ngOnInit() { }

  backToList() : void {
    this.router.navigate(['/list']);
  }

}
