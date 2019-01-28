import { Component, OnInit, Input } from '@angular/core';
import { AutoService } from './services/auto.service';
import { Auto } from './models/auto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h8-oefening2';
  autoList: Auto[];

  constructor(private service: AutoService) { }

  ngOnInit(): void {
    this.fetchContactList();
  }

  fetchContactList() : void {
    this.service.getAutoList().subscribe(data => {
      this.autoList = data;
    });
  }

  addAuto(event: Auto) : void {
    this.service.addAuto(event).subscribe(_ => this.fetchContactList());
  }

  updateAuto(auto: Auto) : void {
    auto.stock--;
    this.service.updateAuto(auto.id, auto).subscribe(_ => this.fetchContactList());
  }

  deleteAuto(id : string) : void {
    this.service.deleteAuto(id).subscribe(_ => this.fetchContactList());
  }

  verkoop(index : number) {
    let auto : Auto = this.autoList[index];
    if (auto.stock <= 1) {
      this.deleteAuto(auto.id);
    } else {
      this.updateAuto(auto);
    }
  }

}
