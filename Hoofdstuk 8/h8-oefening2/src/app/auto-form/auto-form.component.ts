import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Auto } from '../models/auto.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<Auto> = new EventEmitter();
  @Input() auto: Auto;

  form: FormGroup;

  constructor() { }

  ngOnInit() : void {
    this.form = new FormGroup({
      'merk': new FormControl(this.auto ? this.auto.merk : null,
        [Validators.required]),
      'type': new FormControl(this.auto ? this.auto.type : null,
        [Validators.required]),
      'bouwjaar': new FormControl(this.auto ? this.auto.bouwjaar : null,
        [Validators.required, Validators.max(2018), Validators.pattern('[0-9]*')]),
      'prijs': new FormControl(this.auto ? this.auto.prijs : null,
        [Validators.required, Validators.pattern('[0-9]*')]),
      'stock': new FormControl(this.auto ? this.auto.stock : null,
        [Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  submit(form) : void {
    if (form.valid) {
      let auto: Auto = new Auto(
        form.value.bouwjaar,
        form.value.merk,
        form.value.prijs,
        form.value.stock,
        form.value.type
      )
      form.reset();
      this.onSubmit.emit(auto);
    }
  }

}
