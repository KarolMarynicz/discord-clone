import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-channel',
  templateUrl: './home-channel.component.html',
  styleUrls: ['./home-channel.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeChannelComponent {
  @Input() directMessages: Array<string> = [];

  constructor() { }
}
