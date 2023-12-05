import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private httpClient: HttpClient) { }

  getChatList(user: String): Observable<String[]>{
    const list = this.httpClient.get<String[]>('https://api-4hj0.onrender.com/chat/'+user)
    return list
  }

  getMessagesBetween(userOne: String, userTwo: String): Observable<String[][]>{
    const list = this.httpClient.get<String[][]>('https://api-4hj0.onrender.com/chat/'+userOne+'/'+userTwo)
    return list
  }

  sendMessage(userOne: String, userTwo: String, message: String){
    const inputData = [userOne, userTwo, message];
    return this.httpClient.post('https://api-4hj0.onrender.com/message', inputData)
    .subscribe((data: any) => {
      console.log(data)
    });
  }
}
