import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { StateService } from "src/app/state/state.service";
import { User } from "src/app/state/service.model";


@Component({
  selector: 'app-user-panel-shell',
  templateUrl: './user-panel-shell.component.html',
  styleUrls: ['./user-panel-shell.component.sass']
})
export class UserPanelShellComponent implements OnInit {
  // @ts-ignore
  public user$: Observable<User>;

  constructor(private state: StateService) { }

  public ngOnInit(): void {
    this.user$ = this.state.user$;
  }

  public changeMicState(micState: boolean): void {
    this.state.changeUserSettings({ isMicMuted: micState });
  }

  public changeSoundState(soundState: boolean): void {
    this.state.changeUserSettings({ isSoundMuted: soundState });
  }
}
