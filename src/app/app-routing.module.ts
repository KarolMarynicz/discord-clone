import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NotFoundComponent } from 'src/app/shared/not-found/not-found.component';
import { LandingPageComponent } from 'src/app/landing/landing-page/landing-page.component';
import { LoginComponent } from 'src/app/landing/login/login.component';

const landingChildrenRoutes: Routes = [];
const homeChildrenRoutes: Routes = [

];

const routes: Routes = [
  {
    path: "landing",
    component: LandingPageComponent,
    children: landingChildrenRoutes
  },
  {
    path: "channels/:id",
    component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path:'**', component: NotFoundComponent } // Wildcard, display 404 not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
