import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcalendarsComponent } from './procalendars.component';

describe('ProcalendarsComponent', () => {
  let component: ProcalendarsComponent;
  let fixture: ComponentFixture<ProcalendarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcalendarsComponent]
    });
    fixture = TestBed.createComponent(ProcalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
