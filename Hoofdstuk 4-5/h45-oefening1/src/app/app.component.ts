import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening1';
  username: string = "";

  usernameEmpty() : boolean {
    return this.username.length == 0;
  }

  clear() : void {
      this.username = "";
  }

}
