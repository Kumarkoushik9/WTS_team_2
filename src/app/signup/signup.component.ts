
import { Component, NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms";
import {Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { UserService } from "../user.service";


@Component({
    selector: 'app-login',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  })
  export class SignupComponent{
    
    
    SignUpForm!: FormGroup;
    isSignUp:any=false;
    roles:any =['Professional','Client']
    role: any='';
    uniqueChars = ['!','@','#','$','%','&','*']
    missingUniqueChar = true;
    problemMessage = '';
    uniqueProblem = false;
    userList: String[] = []
    emailList: String[] = []

    constructor( private fb: FormBuilder, private router: Router, private httpClient: HttpClient, private userService: UserService ){

    
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
      this.getLists()
      }
    // onSubmit() {
        // this.isSignUp=true
    // }

    changeRole(e:any) {
      // console.log(e.target.value)
      this.SignUpForm.get('role')?.setValue(e.target.value)
    }

    getLists(): void{
      this.userService.getUserList()
      .subscribe(list => {
        console.log(list)
        this.userList = list
      })
      this.userService.getEmailList()
      .subscribe(list => {
        console.log(list)
        this.emailList = list
      })
    }

    onSubmit(){
      var name=this.SignUpForm?.get('fullname') as FormControl;
      var email=this.SignUpForm?.get('email') as FormControl;
      var username=this.SignUpForm?.get('username') as FormControl;
      var password=this.SignUpForm?.get('password') as FormControl;
      var cPassword=this.SignUpForm?.get('cPassword') as FormControl;
      var role = this.SignUpForm?.get('role') as FormControl;

      this.isSignUp=true
      this.problemMessage = '';
      var input_data={name:name.value,email:email.value,username:username.value,password:password.value,cPassword:cPassword.value,role:role.value}
      console.log(typeof input_data.password)
      for (let u in this.userList){
        if(this.userList[u] == input_data.username){
          this.problemMessage += 'Username already in use\n'
          this.uniqueProblem = true
        }
      }
      for (let e in this.emailList){
        if(this.emailList[e] == input_data.email){
          this.problemMessage += 'Email already in use\n'
          this.uniqueProblem = true
        }
      }
      if(input_data.email != null){
        if (!(input_data.email.includes('@'))||!(input_data.email.includes('.'))){
          this.problemMessage += 'Email not valid in use\n'
          this.uniqueProblem = true
        }
      }
      if (input_data.password != null && input_data.cPassword != null){
        if (input_data.password.length < 8){
          this.problemMessage += 'Password must be atleast 8 characters\n';
          this.uniqueProblem = true;
        }
        for (let c in this.uniqueChars){
          if(input_data.password.includes(this.uniqueChars[c])){
            this.missingUniqueChar = false;
          }
        }
        if (this.missingUniqueChar){
          this.problemMessage += 'Password must contain at least one unique character [!,@,#,$,%,&,*]\n';
          this.uniqueProblem = true;
        }
        if (input_data.password != input_data.cPassword){
          this.problemMessage += 'Passwords must match\n';
          this.uniqueProblem = true;
        }
      }
      let valid = input_data.name != null && input_data.email != null && input_data.username != null && input_data.password != null && input_data.cPassword != null && input_data.role != ""
      if(!valid){
        this.problemMessage += 'Missing input field(s)\n';
          this.uniqueProblem = true;
      }
      if(!this.uniqueProblem){
        this.httpClient.post('http://127.0.0.1:5000/insert', input_data)
      // this.loginservice.create_account(input_data)
        .subscribe((data: any) => {
          console.log(data);
        });
        this.router.navigate(['/login']);
      }

  
    }

    // goBackToLoginPage() {
        
    // }
  
  }
  

  // @NgModule({
  //   imports: [
  //     // other imports
  //     ReactiveFormsModule,
  //   ],
  //   declarations: [SignupComponent],
  // })
  // export class SignupModule { }

