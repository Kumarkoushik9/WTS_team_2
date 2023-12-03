import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private httpClient: HttpClient) { }

  getChatList(user: String): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/chat/'+user)
    return list
  }

  getMessagesBetween(userOne: String, userTwo: String): Observable<String[][]>{
    const list = this.httpClient.get<String[][]>('http://127.0.0.1:5000/chat/'+userOne+'/'+userTwo)
    return list
  }

  sendMessage(userOne: String, userTwo: String, message: String){
    const inputData = [userOne, userTwo, message];
    return this.httpClient.post('http://127.0.0.1:5000/message', inputData)
    .subscribe((data: any) => {
      console.log(data)
    });
  }
}
