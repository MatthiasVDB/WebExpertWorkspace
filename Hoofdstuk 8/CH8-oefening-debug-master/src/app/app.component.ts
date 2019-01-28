import { Component, OnInit } from '@angular/core';
import { OefeningService } from './services/oefening.service';
import { Observable } from 'rxjs';
import { Oefening } from './shared/oefening.model';
import { Vak } from './shared/vak.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  oefeningen$: Observable<Oefening[]>;
  vakken$: Observable<Vak[]>;
  
  constructor(private os: OefeningService) {}

  ngOnInit(): void{
    this.refresh();
    this.vakken$ = this.os.getVakken();
  }

  refresh(){
    this.oefeningen$ = this.os.getOefeningen();
  }

  toggleFinish(item: Oefening){
    item.finished = !item.finished;
    this.os.updateOefening(item).subscribe();
  }

  delete(item:Oefening){
    this.os.removeOefening(item).subscribe(_ => this.refresh());
  }

  onSubmit(form) {
    let newOef: Oefening = form.value;
    this.os.addOefening(newOef).subscribe(_ => {
      this.refresh();
      form.reset();
    });
  }
}
