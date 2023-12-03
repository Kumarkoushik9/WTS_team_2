import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProcalendarsComponent } from './procalendars/procalendars.component';

const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  // {path:'',component:LoginComponent},
  { path: 'signup', component: SignupComponent },
  {path : 'chat/:user', component: ChatComponent},
  {path : "chat/:userOne/:userTwo", component: MessageComponent},
  {path : "calendar/:user", component: CalendarComponent},
  {path : "professionalcalendars/:user", component: ProcalendarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
