import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
