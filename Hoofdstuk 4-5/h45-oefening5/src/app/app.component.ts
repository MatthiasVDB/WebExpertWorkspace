import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening5';

  row: number;
  ingegevenPet: string;
  huisdieren: string[] = [
    "Kat",
    "Hond",
    "Hamster",
    "Konijn",
  ]

  toevoegen() : void {
    this.huisdieren.push(this.ingegevenPet);
  }

  delete(huisdier: string) : void {
    this.removeHuisdierFromHuisdieren(huisdier);
  }

  removeHuisdierFromHuisdieren(huisdier: string) : void {
    let huisdierToFind;
    let huisdierenLength = this.huisdieren.length;
    while (huisdierenLength > 0) {
        huisdierToFind = this.huisdieren[--huisdierenLength];
        if (huisdierToFind === huisdier) {
          this.huisdieren.splice(huisdierenLength, 1);
          return;
        }
    }
  }
}
