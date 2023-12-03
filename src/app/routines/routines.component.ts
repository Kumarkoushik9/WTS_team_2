import { Component, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this import

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css'],
  // Add the following line to import CommonModule
  
})
export class RoutinesComponent {
  routines = [
    {
      name: 'Recharge and Reset',
      duration: '4 WEEK ROUTINE - 35 MIN/DAY',
      status: 'Completed: 1',
      inProgress: false,
      color: 'green'
    },
    {
      name: 'Strength and Flexibility Mix',
      duration: '4 WEEK ROUTINE - 45 MIN/DAY',
      status: 'Completed: 0',
      inProgress: false,
      color: 'blue'
    },
    {
      name: 'TKO Kickboxing',
      duration: '4 WEEK ROUTINE - 40 MIN/DAY',
      status: 'Completed: 0',
      inProgress: true,
      color: 'orange'
    },
    {
      name: 'Couch to Functionally Fit',
      duration: '4 WEEK ROUTINE - 20 MIN/DAY',
      status: 'Completed: 0',
      inProgress: false,
      color: 'purple'
    }
  ];

  temp =['Recharge and Reset','Strength and Flexibility Mix','TKO Kickboxing','Couch to Functionally Fit' ]
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}


@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [RoutinesComponent],
    imports: [CommonModule],
  })
  export class MealPlanComp {

    
  }