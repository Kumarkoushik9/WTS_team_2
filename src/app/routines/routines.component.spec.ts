import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutinesComponent } from './routines.component';


describe('SignupComponent', () => {
  let component: RoutinesComponent;
  let fixture: ComponentFixture<RoutinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutinesComponent]
    });
    fixture = TestBed.createComponent(RoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
