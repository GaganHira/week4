import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccontComponent } from './accont.component';

describe('AccontComponent', () => {
  let component: AccontComponent;
  let fixture: ComponentFixture<AccontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
