import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Status } from 'src/models/status.enum';

@Component({
  selector: 'app-user-profile-icon',
  templateUrl: './user-profile-icon.component.html',
  styleUrls: ['./user-profile-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileIconComponent {
  @Input() status: Status | null = Status.Offline;

  public get currentStatusIcon(): string {
    switch (this.status) {
      case Status.DoNotDisturbed:
        return "pi pi-minus-circle";
      case Status.Invisible:
        return "pi pi-circle";
      case Status.Idle:
        return "pi pi-moon";
      case Status.Online:
        return "pi pi-circle-fill";
      default:
        return "";
    }
  }
}
