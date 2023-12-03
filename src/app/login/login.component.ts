import { Component } from '@angular/core';

import { LoginService } from '../services/login_service';

import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login_service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [LoginService]
})
export class LoginComponent {
  constructor(){

  }
  
 

  // onSubmit(input_data:any){

  //   console.log(input_data)
  //   console.log("Hello World")
  //   this.loginservice.create_account(input_data)
  //   .subscribe((data: any) => {
        
  //   });

  // }


}




