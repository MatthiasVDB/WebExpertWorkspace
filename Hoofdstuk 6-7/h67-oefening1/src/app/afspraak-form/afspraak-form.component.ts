import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meeting } from '../models/meeting.model';

@Component({
  selector: 'app-afspraak-form',
  templateUrl: './afspraak-form.component.html',
  styleUrls: ['./afspraak-form.component.css']
})
export class AfspraakFormComponent implements OnInit {
  options: string[];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.options = [
      "ontspanning",
      "zakelijk",
      "andere"
    ];

    this.form = new FormGroup({
      'description' : new FormControl(null, [Validators.required,
      Validators.minLength(3), Validators.maxLength(25)]),
      'date' : new FormControl(null, [Validators.required]),
      'dayPartBeforeNoon' : new FormControl(false),
      'dayPartAfterNoon' : new FormControl(false),
      'reminder' : new FormControl(false),
      'meetingType' : new FormControl("ontspanning")
    });
  }

  submit(form): void {
    let dayPart : string;
    let reminder : boolean;

    if(form.value.dayPartBeforeNoon) {
      dayPart = "voormiddag";
    } else if (form.value.dayPartAfterNoon) {
      dayPart = "namiddag";
    }

    if(form.value.reminder === "ja") {
      reminder = true;
    }

    let meeting: Meeting = new Meeting(
        form.value.description,
        form.value.date,
        dayPart,
        reminder,
        form.value.meetingType
    );
    form.reset();
    console.log(meeting);
}

}
