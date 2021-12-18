import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { StateService } from "src/app/state/state.service";
import { UserModel } from "src/models/user.model";
import { Status } from "src/models/status.enum";

@Component({
  selector: 'app-user-panel-shell',
  templateUrl: './user-panel-shell.component.html',
  styleUrls: ['./user-panel-shell.component.sass']
})
export class UserPanelShellComponent implements OnInit {
  // @ts-ignore
  public user$: Observable<UserModel>;

  constructor(private state: StateService) { }

  public ngOnInit(): void {
    this.user$ = this.state.user$;
  }

  public changeMicState(micState: boolean): void {
    this.state.changeUserSettings( { user: { isMicMuted: micState } } as Partial<UserModel>);
  }

  public changeSoundState(soundState: boolean): void {
    this.state.changeUserSettings( { user: { isSoundMuted: soundState } } as Partial<UserModel>);
  }

  public changeUserStatusState(status: Status): void {
    this.state.changeUserSettings( { user: { status: status } } as Partial<UserModel>);
  }
}
