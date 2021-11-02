import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ServerModel } from "src/models/server.model";

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersListComponent {
  @Input() servers: Array<ServerModel> = [];

  private selectedChannel: string = 'me';

  public onClick(channelId: string): void {
    this.selectedChannel = channelId;
  }

  public isSelected(channelId: string): boolean {
    return this.selectedChannel === channelId;
  }
}
