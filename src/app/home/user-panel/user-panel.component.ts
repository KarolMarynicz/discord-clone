import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPanelComponent {
  @Input() isMicMuted: boolean = false;
  @Input() isSoundMuted: boolean = false;
  @Output() changeMicStateEvent = new EventEmitter<boolean>();
  @Output() changeSoundStateEvent = new EventEmitter<boolean>();

  constructor() { }

  public micButtonClick(): void {
    this.changeMicStateEvent.emit(!this.isMicMuted);
  }

  public soundButtonClick(): void {
    this.changeSoundStateEvent.emit(!this.isSoundMuted);
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
