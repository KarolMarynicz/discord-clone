import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StateService } from "src/app/state/state.service";
import { ServerModel } from "src/models/server.model";

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesListComponent {
  @Input() selectedChannel: ServerModel | undefined | null

  constructor(private state: StateService) { }

  public get isHomeSelected(): boolean {
    return this.selectedChannel?.id === 'me';
  }
}
