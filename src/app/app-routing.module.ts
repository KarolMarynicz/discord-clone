import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';
import { LandingPageComponent } from "src/app/landing/landing-page/landing-page.component";

const routes: Routes = [
  { path: "landing", component: LandingPageComponent },
  {
    path: "home",
    component: HomeComponent,
    children: [

    ]
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path:'**', component: NotFoundComponent } // Wildcard, display 404 not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
