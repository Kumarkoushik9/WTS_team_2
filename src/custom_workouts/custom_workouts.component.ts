
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatIconModule } from "@angular/material/icon";

// import '~@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
  selector: 'app-custom-workouts',
  templateUrl: './custom_workouts.component.html',
  styleUrls: ['./custom_workouts.component.css']
})
export class CustomWorkoutVideosComponent {
  // Add properties and methods as needed
  workout = {
    title: '',
    description: '',
    difficulty: '',
    trainingType: ['HIIT','Strength Training','Pilates','Cardiovascular']
  };

  routines: any[] = []; 
  addRoutines: any[] = []

  selectedDate: Date = new Date();

  dateSelected(date: Date): void {
    this.selectedDate = date;
    // Handle logic when a date is selected, e.g., update checkmarks on the calendar
  }
}