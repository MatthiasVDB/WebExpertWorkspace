import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coin } from 'src/app/shared/coin.model';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  @Input() coinDetail: Coin;
  @Input() i:number;
  @Output() coinClickedEmitter: EventEmitter<Coin> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.coinClickedEmitter.emit(this.coinDetail);
  }

}
