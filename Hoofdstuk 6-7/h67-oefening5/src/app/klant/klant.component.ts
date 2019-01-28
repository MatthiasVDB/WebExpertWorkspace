import { Component, OnInit, Input } from '@angular/core';
import { KlantenService } from '../services/klant.service';
import { Klant } from '../models/klant.model';

@Component({
  selector: 'app-klant',
  templateUrl: './klant.component.html',
  styleUrls: ['./klant.component.css']
})
export class KlantComponent implements OnInit {
  @Input() klant: Klant;
  @Input() index: number;

  constructor(private klantenService : KlantenService) { }

  ngOnInit() { }

  deleteKlant(index : number) {
    this.klantenService.deleteKlant(index);
  }

}
