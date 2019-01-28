import { Component, OnInit } from '@angular/core';
import { Klant } from './models/klant.model';
import { KlantenService } from './services/klant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h67-oefening3';
  klanten : Klant[];

  constructor(private klantenService : KlantenService) { }

  ngOnInit() {
    this.fetchKlanten();
  }

  createKlant(event: Klant): void {
    this.klantenService.addKlant(event);
  }

  fetchKlanten() : void {
    this.klanten = this.klantenService.getKlanten();
  }
}
