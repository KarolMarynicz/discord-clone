import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
import { UsersService } from "src/api/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(private router: Router,
              private usersService: UsersService) { }

  public login(): void {
    this.usersService.loadUserById(1).then();
    this.router.navigate(['/channels/me']).then();
  }
}
