import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "src/app/app.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HomeModule } from "src/app/home/home.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
