import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {

    @Input() contact: Contact;
    @Output() onUpdate: EventEmitter<any> = new EventEmitter();
    
    constructor(private service: ContactService) { }

    toggleFavorite(event: any, id: string, isFavorite: boolean): void {
        event.stopPropagation();
        this.service.updateContact(id, {isFavorite: !isFavorite}).subscribe(() => 
        this.onUpdate.emit);
    }
}