import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
    private apiUrl : string;

    constructor(private http: HttpClient) {
        this.apiUrl = 'http://localhost:3000/cars';
    }

    getCars(): Observable<Car[]> {
        console.log(this.http.get<Car[]>(this.apiUrl));
        return this.http.get<Car[]>(this.apiUrl);
    }
}