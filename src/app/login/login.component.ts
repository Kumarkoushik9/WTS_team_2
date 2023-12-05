import { Component } from '@angular/core';

// import { LoginService } from '../services/login_service';

import { FormsModule } from '@angular/forms';
// import { LoginService } from '../services/login_service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
// import { loginservice } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [LoginService]
})
export class LoginComponent {
  constructor(private router: Router){
    

  }
 
// onSubmit(){
//   console.log("helloo")
//   this.router.navigate(['/workouts']);
//   // this.router.navigate(['/signup']);
//   // this.loginService.getlogin()
//   // .subscribe(list => {
//   //   console.log(list)
//   //   this.router.navigate(['/homepage']);
//   // })
// }

onsub(){
  this.router.navigate(['/homepage']);
}


}




