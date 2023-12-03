import { Component } from '@angular/core';
import { LoginService } from '../services/login_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [LoginService]
})
export class LoginComponent {
  constructor(){

    console.log("kkkk")

  }
  


  onSubmit(input_data:any){

    // console.log(input_data)
    // console.log("Hello World")
    // this.loginservice.create_account(input_data)
    // .subscribe((data: any) => {
        
    // });
  }

}
