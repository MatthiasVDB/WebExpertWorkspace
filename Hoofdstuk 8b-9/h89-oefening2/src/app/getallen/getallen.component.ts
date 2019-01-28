import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getallen',
  templateUrl: './getallen.component.html',
  styleUrls: ['./getallen.component.css']
})
export class GetallenComponent implements OnInit {
  getal : number;
  tafels : number[] = [];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.getal = this.route.snapshot.params['id'];
    this.fillTafels(this.getal);
  }

  fillTafels(getal : number) : void {
    for (let i = 1; i <= 10; i++) {
      this.tafels.push(getal * i);
    }
  }

}
