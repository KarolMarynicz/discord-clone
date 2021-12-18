import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ServerModel } from "src/models/server.model";

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersListComponent {
  @Input() servers: Array<ServerModel> = [];
  @Input() selectedServer: ServerModel | undefined | null;
  @Output() selectServerEvent = new EventEmitter<string>();

  public onClick(channelId: string): void {
    this.selectServerEvent.emit(channelId);
  }

  public isSelected(channelId: string): boolean {
    return this.selectedServer?.id === channelId;
  }
}
