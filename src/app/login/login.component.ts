import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from '@angular/router';

// import { LoginService } from '../services/login_service';

import { FormsModule } from '@angular/forms';
// import { LoginService } from '../services/login_service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [LoginService]
})
export class LoginComponent {

  username?: String;
  password?: String;
  uniqueProblem = false;
  message = "Incorrect Username (and Password)";
  userInfoList: String[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getUserInfoList()
    .subscribe(list => {
      this.userInfoList = list
    })
  }

  login(){
    this.uniqueProblem = false
    this.message = "Incorrect Username (and Password)"
    for(let u in this.userInfoList){
      if(this.username == this.userInfoList[u][1] && this.password == this.userInfoList[u][2]){
        this.userService.setCurUser(this.userInfoList[u][1])
        this.router.navigate(['/homepage']);
      }
      if(this.username == this.userInfoList[u][1] && this.password != this.userInfoList[u][2]){
        this.message = "Incorrect Password"
      }
      this.uniqueProblem = true
    }

  }
  
 

  // onSubmit(input_data:any){

  //   console.log(input_data)
  //   console.log("Hello World")
  //   this.loginservice.create_account(input_data)
  //   .subscribe((data: any) => {
        
  //   });

  // }


}




