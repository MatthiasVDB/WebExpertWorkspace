import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Coin } from 'src/app/shared/coin.model';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {
  coins: Coin[];
  @Output() selectedCoinEmitter: EventEmitter<Coin> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.coins = [
      new Coin("Bitcoin", 4033.42, 70200162753),
      new Coin("XRP", 0.362573, 14621616856),
      new Coin("Ethereum",113.94, 11797950213),
      new Coin("Stellar",0.156311, 2994067819),
      new Coin("Bitcoin Cash", 166.63, 2914478912)
    ];
  }

  handleEmit(ev: Coin): void {
    this.selectedCoinEmitter.emit(ev);
  }

}
