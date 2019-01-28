import { Component } from '@angular/core';
import { Coin } from './shared/coin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCoin: Coin;
  
  selectCoin(event: Coin): void{
    this.selectedCoin = event;
    console.log(event);
  }

  close(): void{
    this.selectedCoin = undefined;
  }
}
