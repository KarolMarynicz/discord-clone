import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from "rxjs";
import { ServerModel } from "src/models/server.model";
import { StateService } from "src/app/state/state.service";
import { StateSelectedSelector } from "src/models/service.model";

@Component({
  selector: 'app-servers-list-shell',
  templateUrl: './servers-list-shell.component.html',
  styleUrls: ['./servers-list-shell.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersListShellComponent {
  constructor(private state: StateService) { }

  public get servers(): Observable<Array<ServerModel>> {
    return this.state.servers$;
  }
  public get selectedServer(): Observable<ServerModel | undefined> {
    return this.state.selectedServer$;
  }

  public selectServer(serverId: string): void {
    this.state.selectItem(serverId, StateSelectedSelector.selectedServer);
  }
}
