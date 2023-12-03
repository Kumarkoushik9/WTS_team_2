import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomWorkoutVideosComponent } from './custom_workouts.component';
import { WorkoutVideosComponent } from 'src/app/workout_videos/workout_videos.component';


describe('SignupComponent', () => {
  let component: WorkoutVideosComponent;
  let fixture: ComponentFixture<WorkoutVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomWorkoutVideosComponent]
    });
    fixture = TestBed.createComponent(CustomWorkoutVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
