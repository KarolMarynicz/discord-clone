import { Injectable } from '@angular/core';
import { StateBase } from "src/app/state/state-base";
import { GlobalState, User } from "src/app/state/service.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService extends StateBase<GlobalState> {
  public user$: Observable<User> = this.select(state => state.user);

  constructor() {
    super( {
      user: { isMicMuted: false, isSoundMuted: false }
    } as GlobalState )
  }

  /**
   * Change user settings (mic muted, sound muted, etc...)
   * */
  public changeUserSettings(user: Partial<User>): void {
    this.setState({ user: { ...this.state.user, ...user } });
  }
}
