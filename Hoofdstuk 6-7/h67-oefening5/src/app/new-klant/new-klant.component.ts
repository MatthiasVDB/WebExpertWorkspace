import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Klant } from '../models/klant.model';

@Component({
  selector: 'app-new-klant',
  templateUrl: './new-klant.component.html',
  styleUrls: ['./new-klant.component.css']
})
export class NewKlantComponent implements OnInit {
  nieuweKlantForm : FormGroup;
  
  @Output() onSubmit: EventEmitter<Klant> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nieuweKlantForm = new FormGroup({
      'voornaam': new FormControl(null, [Validators.required]),
      'achternaam': new FormControl(null, [Validators.required]),
      'email': new FormControl("@email.com", [Validators.required, Validators.pattern(/^[a-z0-9_\.]+@[a-z0-9_\.]+/i)]),
      'straatnaam': new FormControl(null, [Validators.required]),
      'huisnummer': new FormControl(null, [Validators.required]),
      'postcode': new FormControl(null, [Validators.required, Validators.min(1000), Validators.max(8000)]),
      'gemeente': new FormControl(null, [Validators.required])
    });
  }

  submit() : void {
    let klant: Klant = new Klant(
      this.nieuweKlantForm.value.voornaam,
      this.nieuweKlantForm.value.achternaam,
      this.nieuweKlantForm.value.email,
      this.nieuweKlantForm.value.straatnaam,
      this.nieuweKlantForm.value.huisnummer,
      this.nieuweKlantForm.value.postcode,
      this.nieuweKlantForm.value.gemeente
    );
    this.nieuweKlantForm.reset();
    this.onSubmit.emit(klant);
  }
  
}
