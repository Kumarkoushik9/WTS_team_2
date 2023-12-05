import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{

  messages? : String[][];
  messager = ""
  toMessage?: String;

  constructor(private route: ActivatedRoute, private chatService: ChatServiceService){ }

  ngOnInit(): void{
    this.getMessages();
  }

  getMessages(){
    const userOne = this.route.snapshot.paramMap.get('userOne');
    const userTwo = this.route.snapshot.paramMap.get('userTwo');
    this.messager = String(userTwo)
    this.chatService.getMessagesBetween(String(userOne), String(userTwo))
    .subscribe(list => {
      console.log(list)
      this.messages = list
      for(let m in this.messages){
        if (this.messages[m][0] == 'T2Admin'){
          this.messages[m][0] = 'Help'
        }
      }
    })
  }

  orderWait(){}

  reload(){
    window.location.reload()
  }

  sendMessage(){
    const userOne = this.route.snapshot.paramMap.get('userOne');
    const userTwo = this.route.snapshot.paramMap.get('userTwo');
    this.chatService.sendMessage(String(userOne), String(userTwo), String(this.toMessage));
    if(String(userTwo) == 'Help'){
      setTimeout(this.orderWait, 1000)
      var uniqeQuestion = true
      if(String(this.toMessage).toLowerCase().includes("post")){
        uniqeQuestion = false
        this.chatService.sendMessage(String(userTwo), String(userOne), "Fitness professionals are able to post and update content with clients being able to view those posts.");
      } 
      if(String(this.toMessage).toLowerCase().includes("chat")){
        uniqeQuestion = false
        this.chatService.sendMessage(String(userTwo), String(userOne), "Clients are able to chat with all fitness professionals, with professionals only being able to chat with clients who have previously messaged them.");
      }
      if(uniqeQuestion){
        this.chatService.sendMessage(String(userTwo), String(userOne), "A live helper will answer your question as soon as possible.");
      }
      if(!uniqeQuestion){
        this.chatService.sendMessage(String(userTwo), String(userOne), "If your message was not answered message help for a human response.");
      }
    }
    this.toMessage = "";
    //setTimeout(this.reload, 3000);
    
  }

}
