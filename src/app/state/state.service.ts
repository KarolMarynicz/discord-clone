import { Injectable } from '@angular/core';
import { StateBase } from "src/app/state/state-base";
import { GlobalState, User } from "src/models/service.model";
import { Observable } from "rxjs";
import { Status } from "src/models/status.enum";

@Injectable({
  providedIn: 'root'
})
export class StateService extends StateBase<GlobalState> {
  public user$: Observable<User> = this.select(state => state.user);

  constructor() {
    super( {
      user: { isMicMuted: false, isSoundMuted: false, status: Status.Offline }
    } as GlobalState )
  }

  /**
   * Change user settings (mic muted, sound muted, etc...)
   * */
  public changeUserSettings(user: Partial<User>): void {
    this.setState({ user: { ...this.state.user, ...user } });
  }
}
