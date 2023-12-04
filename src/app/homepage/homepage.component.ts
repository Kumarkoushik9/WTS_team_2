import { Component } from "@angular/core";
import { HomePageService } from "../services/home_page";
import { every } from "rxjs";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })
  export class HomePageComponent{

    searchQuery: string = '';
    Isyoga: boolean = true;
    Isfitness: boolean = true;
    inp:string=''
    constructor(){
      this.inp=""
    }

    srch(data:any){
      
      this.inp = JSON.stringify(data.target.value)
      console.log(this.inp)
    }
  search(): void {
    console.log("Hello")

    if (this.inp.toLowerCase().includes("yoga")) {
      // "yoga" is present in this.inp
      this.Isyoga = true;
      this.Isfitness = false; // Assuming you want to set Isfitness to false when "yoga" is present
    } else {
      // "yoga" is not present in this.inp
      this.Isyoga = false;
      this.Isfitness = true; // Set Isfitness to true or handle it according to your requirements
    }

    // Implement the search functionality here
    // You can use this.searchQuery to perform the search
  }
    // searchQuery: string = '';

    // constructor(private homepageService: HomePageService) { }

    // search() {
    // //   this.homepageService.search(this.searchQuery)
    // //   .subscribe((results : any) => {
    // //     // Handle the search results here
    // //     console.log(results);
    // //   });
    // }
    
    
  }