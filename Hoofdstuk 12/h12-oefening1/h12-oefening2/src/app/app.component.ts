import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { Observable } from 'rxjs';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h12-oefening2';
  carList : Car[] = [];

  constructor(private carService : CarService) { }

  ngOnInit() : void {
    this.fetchCars();
  }

  fetchCars() : void {
    this.carService.getCars().subscribe(cars => {
      this.carList = cars
    });
    console.log(this.carList.length);
  }
}
