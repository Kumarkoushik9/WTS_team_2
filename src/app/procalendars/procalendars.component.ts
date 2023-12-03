import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-procalendars',
  templateUrl: './procalendars.component.html',
  styleUrls: ['./procalendars.component.css']
})
export class ProcalendarsComponent {

  list: String[] = []

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void{
    const user = this.route.snapshot.paramMap.get('user');
    this.userService.getProList(String(user))
    .subscribe(list => {
      console.log(list)
      this.list = list
    })
  }

  viewCalendar(username: String): void{
    this.router.navigate(['calendar/'+username])
  }

}
