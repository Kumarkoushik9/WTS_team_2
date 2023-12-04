
import { Component, NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms";
import {Router} from '@angular/router';
import { LoginService } from "../services/login_service";



@Component({
    selector: 'app-login',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })
  export class SignupComponent{
    
    
    SignUpForm!: FormGroup;
    isSignUp:any=false;

    // roles:any =['Admin','Customer']
    role: any='';

    constructor(private router: Router, private fb: FormBuilder){

   
      this.isSignUp==false
      this.SignUpForm = this.fb.group({
        'fullname': ['',Validators.required],
        'email': [''],
        'username':[''],
        'password':[''],

        // role:new FormControl(null)

      });
      // this.SignUpForm.get('role')?.setValue("")

    }
    ngOnInit() {
      // this.SignUpForm = new FormGroup({
      //     'fullname': new FormControl( null),
      //     'email': new FormControl(null),
      //     'username':new FormControl(null),
      //     'password':new FormControl(null),
      //     role:new FormControl(null)

      //   });
      //   this.SignUpForm.get('role')?.setValue("")
      }
    // onSubmit() {
        // this.isSignUp=true
    // }

    changeRole(e:any) {
      // console.log(e.target.value)
      this.SignUpForm.get('role')?.setValue(e.target.value)
    }

    onSubmit(){
      var name=this.SignUpForm?.get('fullname') as FormControl;
      var email=this.SignUpForm?.get('email') as FormControl;
      var username=this.SignUpForm?.get('username') as FormControl;
      var password=this.SignUpForm?.get('password') as FormControl;

      // var role = this.SignUpForm?.get('role') as FormControl;

      this.isSignUp=true
      var input_data={name:name.value,email:email.value,username:username.value,password:password.value}
      console.log(input_data)
      // this.loginservice.create_account(input_data)
      // .subscribe((data: any) => {
      //     console.log(data)
          // this.router.navigate(['/login']);
      // });
      this.router.navigate(['/login']);
     
  
    }

    goBackToLoginPage() {
        
    }
  

  }

  // @NgModule({
  //   imports: [
  //     // other imports
  //     ReactiveFormsModule,
  //   ],
  //   declarations: [SignupComponent],
  // })
  // export class SignupModule { }

