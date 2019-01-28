import { Injectable } from '@angular/core';

import { Oefening } from '../shared/oefening.model';

import { Vak } from '../shared/vak.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/*
    Deze applicatie maakt gebruik van de angular-in-memory-web-api module
    Het gebruik van deze module zien we in de volgende lesweek. Je mag er
    vanuit gaan dat de code & configuratie van deze module correct is.
*/
@Injectable()
export class OefeningService {
    private oefeningUrl: string;
    private vakUrl: string;
    
    constructor(private http: HttpClient) { 
        this.oefeningUrl = 'api/oefeningen';
        this.vakUrl = 'api/vakken';
    }

    getOefeningen(searchText?: string): Observable<Oefening[]>{
        if(!searchText)
            return this.http.get<Oefening[]>(this.oefeningUrl);
        else {
            const options = { params: new HttpParams().set('name', searchText)};
            
            return this.http.get<Oefening[]>(this.oefeningUrl, options);
        }
    }

    addOefening(item: Oefening){
        return this.http.post(this.oefeningUrl, item);
    }

    removeOefening(item: Oefening){
        return this.http.delete(this.oefeningUrl + '/' + item.id);
    }

    updateOefening(item: Oefening){
        return this.http.put(this.oefeningUrl, item);
    }

    getVakken(): Observable<Vak[]>{
        return this.http.get<Vak[]>(this.vakUrl);
    }
}