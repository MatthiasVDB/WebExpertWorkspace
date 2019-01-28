import { Component, OnInit, Input } from '@angular/core';
import { Artikel } from './artikel.model';

@Component({
  selector: 'app-artikel-component',
  templateUrl: './artikel-component.component.html',
  styleUrls: ['./artikel-component.component.css']
})
export class ArtikelComponentComponent implements OnInit {

  @Input() artikelen: Artikel[];

  constructor() { }

  ngOnInit() { }

  showAlert(artikel:Artikel) {
    alert(artikel.artikelNaam + " - " + artikel.verkoopprijs + " - " + artikel.aankoopprijs);
  }

}
