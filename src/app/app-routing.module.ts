import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './homepage/homepage.component';
import { WorkoutVideosComponent } from './workout_videos/workout_videos.component';
import { MealPlansComponent } from './mealplans/mealplans.component';
import { CustomWorkoutVideosComponent } from 'src/custom_workouts/custom_workouts.component';
import { RoutinesComponent } from './routines/routines.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  // {path:'',component:LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'homepage', component: HomePageComponent},
  {path: 'workoutvideos', component: WorkoutVideosComponent},
  {path: 'mealplans', component: MealPlansComponent},
  {path: 'customworkouts', component: CustomWorkoutVideosComponent},
  {path: 'routines', component: RoutinesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
