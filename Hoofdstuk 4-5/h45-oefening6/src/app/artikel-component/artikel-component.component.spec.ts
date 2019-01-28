import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelComponentComponent } from './artikel-component.component';

describe('ArtikelComponentComponent', () => {
  let component: ArtikelComponentComponent;
  let fixture: ComponentFixture<ArtikelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
