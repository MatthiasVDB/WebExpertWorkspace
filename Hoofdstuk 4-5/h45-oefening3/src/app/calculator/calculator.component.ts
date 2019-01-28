import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  var1: number;
  var2: number;
  result: number;
  hidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  add(): void {
      this.result = this.var1 + this.var2;
      this.hidden = false;
  }

}
