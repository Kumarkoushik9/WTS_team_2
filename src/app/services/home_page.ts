import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable() 
export class HomePageService { 

    public baseurl=''
   
    constructor( 
        // Angular Modules 
        private http: HttpClient 
        ) {
            this.baseurl=""
        } 

        public search(query:string) { 
            var url = this.baseurl
            return this.http.post(url, query); 
        } 
    

    
    

}