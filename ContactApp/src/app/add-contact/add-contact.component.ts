import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { EditorState } from '../models/editor-state.enum';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  state: EditorState = EditorState.null;
  editorState: any = EditorState;

  constructor(private service : ContactService) { }

  ngOnInit() {
  }

  createContact(event: Contact) {
    this.service.addContact(event).subscribe(() => {
      this.state = EditorState.created;
      setTimeout(() => this.state = EditorState.null, 5000);
    }); 
  }

}
