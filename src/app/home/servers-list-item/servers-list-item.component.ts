import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servers-list-item',
  templateUrl: './servers-list-item.component.html',
  styleUrls: ['./servers-list-item.component.sass']
})
export class ServersListItemComponent {
  @Input() backgroundColor: string = "";
  @Input() tooltipText: string = "";
  @Input() isServer: boolean = false;
  @Input() isActive: boolean = false;

  constructor() { }
}
