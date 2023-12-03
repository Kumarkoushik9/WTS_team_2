import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable() 
export class LoginService { 
    public baseurl=''

    constructor( 
        // Angular Modules 
        private http: HttpClient 
        ) {
            this.baseurl=""
        } 


    // public get(url: string, options?: any) { 
    // return this.http.get(url, options); 
    // } 

    public create_account( data: any) { 
        var url = this.baseurl
        return this.http.post(url, data); 
    } 

    // public put(url: string, data: any, options?: any) { 
    // return this.http.put(url, data, options); 
    // } 

    // public delete(url: string, options?: any) { 
    // return this.http.delete(url, options); 
    // } 
}