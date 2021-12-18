import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from "primeng/api";
import { Status } from "src/models/status.enum";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPanelComponent implements OnInit {
  @Input() isMicMuted: boolean = false;
  @Input() isSoundMuted: boolean = false;
  @Input() userName: string = "";
  @Output() changeMicStateEvent = new EventEmitter<boolean>();
  @Output() changeSoundStateEvent = new EventEmitter<boolean>();
  @Output() changeUserStatusEvent = new EventEmitter<Status>();

  public menuItems: Array<MenuItem> = [];

  constructor() { }

  public ngOnInit(): void {
    this.menuItems = [
      { label: 'Online', icon: 'pi pi-fw pi-circle-fill', command: () => this.statusChangeClick(Status.Online) },
      { separator: true },
      { label: 'Idle', icon: 'pi pi-fw pi-moon', command: () => this.statusChangeClick(Status.Idle) },
      { label: 'Do not disturb', icon: 'pi pi-fw pi-minus-circle', command: () => this.statusChangeClick(Status.DoNotDisturbed) },
      { label: 'Invisible', icon: 'pi pi-fw pi-circle', command: () => this.statusChangeClick(Status.Invisible) }
    ];
  }

  public micButtonClick(): void {
    this.changeMicStateEvent.emit(!this.isMicMuted);
  }

  public soundButtonClick(): void {
    this.changeSoundStateEvent.emit(!this.isSoundMuted);
  }

  public statusChangeClick(status: Status): void {
    this.changeUserStatusEvent.emit(status);
  }

  public getMicIconUrl(): string {
    return this.isMicMuted
      ? "assets/images/mic-off.svg"
      : "assets/images/mic-on.svg";
  }

  public getSoundIconUrl(): string {
    return this.isSoundMuted
      ? "assets/images/headset-off.svg"
      : "assets/images/headset-on.svg";
  }
}
