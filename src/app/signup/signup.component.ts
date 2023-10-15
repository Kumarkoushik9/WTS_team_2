import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { LoginService } from "../services/login_service";
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms";
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })
  export class SignupComponent{
    
    
    SignUpForm!: FormGroup;
    isSignUp:any=false;
    constructor(private loginservice : LoginService,private router: Router){
      this.isSignUp==false
      
    }
    ngOnInit() {
      this.SignUpForm = new FormGroup({
          'fullname': new FormControl( null),
          'email': new FormControl(null),
          'username':new FormControl(null),
          'password':new FormControl(null),

        });
      }
    // onSubmit() {
        // this.isSignUp=true
    // }
    onSubmit(){
      var name=this.SignUpForm?.get('fullname') as FormControl;
      var email=this.SignUpForm?.get('email') as FormControl;
      var username=this.SignUpForm?.get('username') as FormControl;
      var password=this.SignUpForm?.get('password') as FormControl;

      this.isSignUp=true
      var input_data={name:name.value,email:email.value,username:username.value,password:password.value}
      console.log(input_data)
      this.loginservice.create_account(input_data)
      .subscribe((data: any) => {
          console.log(data)
          this.router.navigate(['/login']);
      });
  
    }

    goBackToLoginPage() {
        
    }
  
  }