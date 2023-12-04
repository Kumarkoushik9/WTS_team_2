import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  list: String[] = []

  constructor(private chatService: ChatServiceService, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void{
    const user = this.route.snapshot.paramMap.get('user');
    this.chatService.getChatList(String(user))
    .subscribe(list => {
      console.log(list)
      this.list = list
    })
  }

  messagesBetween(username: String): void{
    const user = this.route.snapshot.paramMap.get('user')
    this.router.navigate(['chat/'+String(user)+'/'+username])
    console.log(username)
  }

}
