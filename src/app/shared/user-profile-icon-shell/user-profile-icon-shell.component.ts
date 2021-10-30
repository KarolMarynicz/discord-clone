import { Component, OnInit } from '@angular/core';
import { Status } from 'src/models/status.enum';

@Component({
  selector: 'app-user-profile-icon-shell',
  templateUrl: './user-profile-icon-shell.component.html',
  styleUrls: ['./user-profile-icon-shell.component.sass']
})
export class UserProfileIconShellComponent implements OnInit {
  ngOnInit(): void { }

  public getUserStatus(userid: string): Status {
    return Status.Offline
  }
}
