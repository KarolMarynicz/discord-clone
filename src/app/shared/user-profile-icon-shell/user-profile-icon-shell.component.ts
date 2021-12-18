import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import { Status } from 'src/models/status.enum';
import { StateService } from "src/app/state/state.service";

@Component({
  selector: 'app-user-profile-icon-shell',
  templateUrl: './user-profile-icon-shell.component.html',
  styleUrls: ['./user-profile-icon-shell.component.sass']
})
export class UserProfileIconShellComponent {
  constructor(private state: StateService) { }

  public getUserStatus(userId?: string): Observable<Status> {
    /*
     * TODO: Create method that retrieve user's (provided by user id) status.
     *       Most likely it should be api service for that.
     */

    if (!userId) {
      return this.state.userStatus$;
    }

    return of(Status.Offline);
  }
}
