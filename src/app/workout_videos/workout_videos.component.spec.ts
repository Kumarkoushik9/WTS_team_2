import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutVideosComponent } from './workout_videos.component';


describe('SignupComponent', () => {
  let component: WorkoutVideosComponent;
  let fixture: ComponentFixture<WorkoutVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutVideosComponent]
    });
    fixture = TestBed.createComponent(WorkoutVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
