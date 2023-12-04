import { Component, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { HomePageService } from "../services/home_page";
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-homepage',
    templateUrl: './mealplans.component.html',
    styleUrls: ['./mealplans.component.css']
  })
  export class MealPlansComponent{
    images: string[] = [
        '../assets/images/mealplan1.jpeg',
        '../assets/images/mealplan2.png',
        '../assets/images/mealplan3.webp',
        '../assets/images/mealplan4.png',
        '../assets/images/mealplan5.png',
      ];
      currentIndex: number = 0;
    
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }

  }

  @NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [MealPlansComponent],
    imports: [CommonModule],
  })
  export class MealPlanComp {

    
  }