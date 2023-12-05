import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginservice {

  constructor(private httpClient: HttpClient) { }

  getlogin(): Observable<String[]>{
    const list = this.httpClient.get<String[]>('http://127.0.0.1:5000/google-login')
    return list
  }
}