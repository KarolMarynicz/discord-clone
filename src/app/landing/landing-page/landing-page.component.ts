import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent {
  constructor(private router: Router) { }

  public redirect(): void {
    this.router.navigate(['/home']).then();
  }
}
