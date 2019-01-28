import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening2';
  showDetails: boolean = false;
  timeStamps : number[] = [];

  toggleDetails() : void {
    this.showDetails = !this.showDetails;
    this.timeStamps.push(new Date().getTime());
  }
}
