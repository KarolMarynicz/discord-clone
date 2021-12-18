import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { StateBase } from "src/app/state/state-base";
import { GlobalState, StateSelectedSelector, StateSelector } from "src/models/service.model";
import { Status } from "src/models/status.enum";
import { makeUser, UserModel } from "src/models/user.model";
import { ServerModel } from "src/models/server.model";

@Injectable({
  providedIn: 'root'
})
export class StateService extends StateBase<GlobalState> {
  /**
   * User info and user's settings.
   * @type {Observable<UserModel>>}
   * */
  public user$: Observable<UserModel> = this.select(state => state.user);
  /**
   * User activity status (online, offline, idle, ...).
   * @type {Observable<Status>>}
   * */
  public userStatus$: Observable<Status> = this.select(state => state.user.user.status);
  /**
   * Serves that current user belongs to.
   * @type {Observable<Array<ServerModel>>}
   * */
  public servers$: Observable<Array<ServerModel>> = this.select(state => state[StateSelector.servers]);
  /**
   * Currently selected server.
   * @type {Observable<ServerModel | undefined>}
   * */
  public selectedServer$: Observable<ServerModel | undefined> = this.select((state) => {
    if (state[StateSelectedSelector.selectedServer] === "me") {
      return { id: 'me', channel: {} } as ServerModel
    }
    return state[StateSelector.servers].find(item => item.id === state[StateSelectedSelector.selectedServer]);
  });

  constructor() {
    super({
      user: { id: 0, user: { name: "", isSoundMuted: false, isMicMuted: false, status: Status.Online } },
      [StateSelector.servers]: [],
      [StateSelectedSelector.selectedServer]: "me"
    })
  }

  /**
   * Set whole part of the state defined by 'stateSelector' param
   * @param {Array<ServerModel>} items - Data set to save in state.
   * @param {StateSelector} stateSelector - Part of state where data should be saved.
   * @param {boolean = false} shouldCurrentItemsPersists - Defines if currently saved data in store should be removed or not.
   * */
  public setItems(items: Array<ServerModel>, stateSelector: StateSelector, shouldCurrentItemsPersists: boolean = false): void {
    this.setState({ [stateSelector]: items });
  }

  /**
   * Select item
   * @param {string} itemId - ID of item that should be selected.
   * @param {StateSelectedSelector} selectedStateSelector - Defines to which part of state selected item belongs.
   * */
  public selectItem(itemId: string, selectedStateSelector: StateSelectedSelector): void {
    this.setState({ [selectedStateSelector]: itemId });
  }

  /**
   * Change user settings (mic muted, sound muted, etc...)
   * @param {Partial<UserModel>} user - Part of user model that need to be changed.
   * */
  public changeUserSettings(user: Partial<UserModel>): void {
    this.setState({ user: makeUser(user, this.state.user) });
  }
}
