import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent
  ],
	imports: [
		CommonModule,
		TranslateModule
	]
})
export class LandingModule { }
