import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';
import { UserProfileIconShellComponent } from './user-profile-icon-shell/user-profile-icon-shell.component';
import { StatusIconComponent } from './status-icon/status-icon.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    UserProfileIconComponent,
    UserProfileIconShellComponent,
    StatusIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserProfileIconShellComponent
  ]
})
export class SharedModule { }
