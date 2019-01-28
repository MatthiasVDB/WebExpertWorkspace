import { Component, OnInit } from '@angular/core';
import { Artikel } from './artikel-component/artikel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'H45-oefening6';
  artikelen: Artikel[];

  ngOnInit() {
    this.artikelen = [
      new Artikel(1, "Tandenborstel", 1.5, 3.24, "assets/tandenborstel.jpg"),
      new Artikel(2, "Handdoek", 2.5, 4.75, "assets/handdoek.jpg"),
      new Artikel(3, "Washandje", 0.4, 1.20, "assets/washandje.jpg"),
      new Artikel(4, "Keukenrol", 1.75, 0.65, "assets/keukenrol.jpg")
    ];
  }

}
