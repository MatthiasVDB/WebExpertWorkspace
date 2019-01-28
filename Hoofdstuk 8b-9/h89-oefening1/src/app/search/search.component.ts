import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name : string;
  selectedRating: string;
  options: string[];

  @Output() onCharEnter: EventEmitter<string> = new EventEmitter();
  @Output() onSelectionChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.options = [
      "All",
      "1",
      "2",
      "3"
    ];

    this.selectedRating = this.options[0];
  }

  searchName() : void {
    this.onCharEnter.emit(this.name);
  }

  searchRating() : void {
      this.onSelectionChange.emit(this.selectedRating);
  }

}
