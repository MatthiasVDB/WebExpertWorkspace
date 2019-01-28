import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

/*
    Deze applicatie maakt gebruik van de angular-in-memory-web-api module
    Het gebruik van deze module zien we in de volgende lesweek. Je mag er
    vanuit gaan dat de code & configuratie van deze module correct is.
*/
@Injectable()
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const oefeningen = [
            { id: 1, name: 'oefeningen hoofdstuk 1', link: 'http://github.com/studentPXL/web-expx-h1',course: 'web expert', finished: true},
            { id: 2, name: 'oefeningen hoofdstuk 2', link: 'http://github.com/studentPXL/web-exp-h2', course: 'web expert', finished: false},
            { id: 3, name: 'oefeningen hoofdstuk 1', link: 'http://github.com/studentPXL/net-adv-h1', course: '.NET advanced', finished: true},
            { id: 4, name: 'oefeningen hoofdstuk 2', link: 'http://github.com/studentPXL/net-adv-h2', course: '.NET advanced', finished: false}
        ]

        const vakken = [
            { id: 1, name: 'web expert' },
            { id: 2, name: '.NET advanced' },
            { id: 3, name: 'web essentials' }
        ]
        
        return { oefeningen, vakken };
        
      }
}