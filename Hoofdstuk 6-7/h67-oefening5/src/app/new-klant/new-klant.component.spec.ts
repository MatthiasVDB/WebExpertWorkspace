import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKlantComponent } from './new-klant.component';

describe('NewKlantComponent', () => {
  let component: NewKlantComponent;
  let fixture: ComponentFixture<NewKlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
