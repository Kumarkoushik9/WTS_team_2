import { Component } from "@angular/core";
import { HomePageService } from "../services/home_page";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })
  export class HomePageComponent{

    searchQuery: string = '';

  search(): void {
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