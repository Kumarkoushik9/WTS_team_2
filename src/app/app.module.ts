import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login_service';
import { MatDatepickerModule } from '@angular/material/datepicker';


// import { LoginService } from './services/login_service';
import { HomePageComponent } from './homepage/homepage.component';
import { SignupModule } from './signup/signup.component.module';



// import { LoginService } from './services/login_service';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProcalendarsComponent } from './procalendars/procalendars.component';
import { CustomWorkoutVideosComponent } from 'src/custom_workouts/custom_workouts.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    ChatComponent,
    MessageComponent,
    CalendarComponent,
    ProcalendarsComponent,
    CustomWorkoutVideosComponent,
    HomePageComponent,
    
    ChatComponent,
    MessageComponent,
    CalendarComponent,
    ProcalendarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    SignupModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatSelectModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
