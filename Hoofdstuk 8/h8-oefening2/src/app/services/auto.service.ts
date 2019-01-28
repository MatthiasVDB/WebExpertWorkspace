import { Injectable } from '@angular/core';
import { Auto } from '../models/auto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEAPIURL: string = 'https://autos-f83f9.firebaseio.com/autos.json';
const AUTOAPIURL: string = 'https://autos-f83f9.firebaseio.com/autos/';

@Injectable()
export class AutoService {
    autoList: Auto[];

    constructor(private http: HttpClient) { }

    getAutoList() : Observable<Auto[]> {
        return this.http.get(BASEAPIURL).pipe(
            map(this.parseAutoData),
            map((autos: Auto[]) => {
                return autos;
            })
        );
    }

    parseAutoData(rawAutos: any[]): Auto[] {
        return Object.keys(rawAutos).map( key => {
            let auto = rawAutos[key];
            return new Auto(
                auto.bouwjaar,
                auto.merk,
                auto.prijs,
                auto.stock,
                auto.type,
                key
            );
        });
    }

    addAuto(auto: Auto) : Observable<any> {
        return this.http.post(BASEAPIURL, auto);
    }

    updateAuto(id: string, data: any) : Observable<any> {
        let url: string = `${AUTOAPIURL}${id}.json`;
        return this.http.patch(url, data);
    }

    deleteAuto(id: string) : Observable<any> {
        let url: string = `${AUTOAPIURL}${id}.json`;
        return this.http.delete(url);
    }
}