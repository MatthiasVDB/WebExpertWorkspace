import { Component } from '@angular/core'

@Component({
    selector: 'app-nieuwsbrief',
    templateUrl:'./nieuwsbrief.component.html',
    styleUrls: ['./nieuwsbrief.component.css']
})

export class NieuwsbriefComponent {
    email: string;
    processedEmail: string;

    verwerk() : void {
        this.processedEmail = this.email;
    }
}