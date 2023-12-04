import { Component, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Add this import

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css'],
  // Add the following line to import CommonModule
  
})
export class RoutinesComponent {
  // routines = [
    // {
    //   name: 'Recharge and Reset',
    //   duration: '4 WEEK ROUTINE - 35 MIN/DAY',
    //   status: 'Completed: 1',
    //   inProgress: false,
    //   color: 'green'
    // },
  //   {
  //     name: 'Strength and Flexibility Mix',
      // duration: '4 WEEK ROUTINE - 45 MIN/DAY',
      // status: 'Completed: 0',
      // inProgress: false,
      // color: 'blue'
  //   },
  //   {
  //     name: 'TKO Kickboxing',
      // duration: '4 WEEK ROUTINE - 40 MIN/DAY',
      // status: 'Completed: 0',
      // inProgress: true,
      // color: 'orange'
  //   },
  //   {
  //     name: 'Couch to Functionally Fit',
      // duration: '4 WEEK ROUTINE - 20 MIN/DAY',
      // status: 'Completed: 0',
      // inProgress: false,
      // color: 'purple'
  //   }
  // ];

  temp =['Recharge and Reset','Strength and Flexibility Mix','TKO Kickboxing','Couch to Functionally Fit' ]
  isDropdownOpen = false;
  isOverlayOpen: boolean = false;
  newRoutine: { name: string, duration: string , status:string, inProgress:string, color:string} = { name: '', duration: '' , status:'', inProgress:'', color:''};
  routines: any[] = []; 
  addRoutines: any[] = []
   n: string=""
   d: string=""
   c: string=""
   p: boolean=false
   s: string=""
   selectedRout:string=""
   isempty: boolean= true
  

  constructor(){
    this.addRoutines = ["Recharge and Reset", "Strength and Flexibility Mix", "TKO Kickboxing", "Couch to Functionally Fit"]
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleOverlay(): void {
    this.isOverlayOpen = true;
    
  }
  srch1(value: any): void {
    this.newRoutine.name = value.target.value;
  }
  srch2(value: any): void {
    this.newRoutine.duration = value.target.value;
  }
  srch3(value: any): void {
    this.newRoutine.status = value.target.value;
  }
  srch4(value: any): void {
    this.newRoutine.inProgress = value.target.value;
  }
  srch5(value: any): void {
    this.newRoutine.color = value.target.value;
  }

  addRoutine(data:any): void {
    
    // Implement logic to add newRoutine to routines array
    // You can also reset newRoutine and close the overlay
    console.log(data.target.value)
    if(data.target.value ==""){
      return 
    }
    else{
    if(data.target.value =="Recharge and Reset"){
      
       this.n= 'Recharge and Reset'
       this.d= '4 WEEK ROUTINE - 35 MIN/DAY'
       this.s= 'Completed: 1'
       this.p= false
       this.c= 'green'
      
    }
        if(data.target.value =="Strength and Flexibility Mix"){
          
          this.n= 'Strength and Flexibility Mix'
          this.d= '4 WEEK ROUTINE - 45 MIN/DAY',
          this.s= 'Completed: 0',
          this.p= false,
          this.c= 'blue'
     
        }
        if(data.target.value =="TKO Kickboxing"){
            
          this.n= 'TKO Kickboxing'
          this.d= '4 WEEK ROUTINE - 40 MIN/DAY',
          this.s= 'Completed: 0',
          this. p= true,
          this.c= 'orange'
   
        }
        if(data.target.value =="Couch to Functionally Fit"){
              
          this.n= 'Couch to Functionally Fit'
          this.d= '4 WEEK ROUTINE - 20 MIN/DAY',
          this.s= 'Completed: 0',
          this.p= false,
          this.c= 'purple'
        
        }
    
    this.routines.push({ name: this.n, duration:this.d , status: this.s, inProgress: this.p, color: this.c });
    this.newRoutine = { name: '', duration: '', status:'', inProgress:'', color:'' };
    this.isOverlayOpen = false;
    console.log(this.routines)
    this.isempty = false
    this.n =""
    this.d=""
    this.p=false
    this.s=""
    this.c=""
  }}

}


@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [RoutinesComponent],
    imports: [CommonModule],
  })
  export class MealPlanComp {

    
  }