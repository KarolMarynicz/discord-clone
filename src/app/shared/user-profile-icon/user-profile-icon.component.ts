import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/models/status.enum';

@Component({
  selector: 'app-user-profile-icon',
  templateUrl: './user-profile-icon.component.html',
  styleUrls: ['./user-profile-icon.component.sass']
})
export class UserProfileIconComponent implements OnInit {
  @Input() status: Status = Status.Offline;

  constructor() { }

  ngOnInit(): void {}
}
