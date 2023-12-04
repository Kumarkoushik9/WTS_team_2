import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private curUser = new BehaviorSubject('');
  getCurUser = this.curUser.asObservable();

  constructor(private httpClient: HttpClient) { }

  setCurUser(username: string){
    this.curUser.next(username)
  }

  getUserList(): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/users')
    return list
  }

  getUserInfoList(): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/userInfo')
    return list
  }

  getProList(user: String): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/procalendars/'+user)
    return list
  }

  getUserEvents(username: String): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/event/' + username)
    return list
  }

  getEmailList(): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/emails')
    return list
  }

  postEvent(username: String, year: number, month: number, day: number, eventName: String){
    const inputData = [username, year, month, day, eventName];
    return this.httpClient.post('http://127.0.0.1:5000/calendar', inputData)
    .subscribe((data: any) => {
      console.log(data)
    });
  }
}
