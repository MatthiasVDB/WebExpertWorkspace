import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallenComponent } from './getallen.component';

describe('GetallenComponent', () => {
  let component: GetallenComponent;
  let fixture: ComponentFixture<GetallenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
