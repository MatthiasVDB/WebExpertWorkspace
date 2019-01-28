import { Component, OnInit, Output } from '@angular/core';
import { Event } from '../models/event.model';
import { EventEmitter } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event : Event;
  form: FormGroup;

  constructor(private service : EventService, private router : Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'titel': new FormControl(this.event ? this.event.titel : null, 
        [Validators.required, Validators.minLength(3)]),
      'datum': new FormControl(this.event ? this.event.datum : null, 
        [Validators.required]),
      'adres': new FormControl(this.event ? this.event.adres : null, 
        [Validators.required, Validators.minLength(3)])
    });
  }

  submit(form : any): void{
    let event: Event = new Event(
      this.service.id,
      form.value.titel,
      form.value.datum,
      form.value.adres
    );
    this.service.addEvent(event);
    this.router.navigate(['/list']);
  }

}
