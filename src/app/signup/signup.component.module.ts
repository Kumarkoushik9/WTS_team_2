// signup.module.ts

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    // Other necessary imports
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule
  ],
  exports: [
    SignupComponent,
  ],
})
export class SignupModule { }
