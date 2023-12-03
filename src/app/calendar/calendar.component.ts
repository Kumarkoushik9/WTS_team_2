import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  isNotUser = false
  addEvent = false
  list: String[] = []
  eventName?: String;
  userList: String[] = []
  eventList: String[] = []
  validUser = false
  listEmpty = true

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getUserList()
      .subscribe(list => {
        console.log(list)
        this.userList = list
        this.checkValidity()
      })
    var user = this.route.snapshot.paramMap.get('user');
    this.userService.getUserEvents(String(user))
      .subscribe(list => {
        console.log(list)
        this.eventList = list
      })
  }

  checkValidity(){
    var user = this.route.snapshot.paramMap.get('user');
    for (let u in this.userList){
      if(user == this.userList[u]){
        this.validUser = true
      }
    }
  }

  swapAddEvent(){
    this.addEvent = !this.addEvent
    this.eventName = ""
  }

  updateEvents(){
    var user = this.route.snapshot.paramMap.get('user');
    this.userService.getUserEvents(String(user))
      .subscribe(list => {
        console.log(list)
        this.eventList = list
      })
  }

  reload(){
    window.location.reload()
  }

  addNewEvent(){
    var dateValue = (<HTMLInputElement>document.getElementById("addDate")).value
    if (dateValue != ""){
      var ymd = dateValue.split("-")
      console.log(ymd[0])
      console.log(ymd[1])
      console.log(ymd[2])
      console.log(Number(ymd[0]) + Number(ymd[1]) + Number(ymd[2]))
      var user = this.route.snapshot.paramMap.get('user');
      this.userService.postEvent(String(user), Number(ymd[0]), Number(ymd[1]), Number(ymd[2]), String(this.eventName))
      setTimeout(this.reload, 2000)
    }
  }

  goToProCalendars(){
    var user = this.route.snapshot.paramMap.get('user');
    this.router.navigate(['professionalcalendars/'+user])
  }

}
