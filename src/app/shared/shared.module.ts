import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';
import { UserProfileIconShellComponent } from './user-profile-icon-shell/user-profile-icon-shell.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    UserProfileIconComponent,
    UserProfileIconShellComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    UserProfileIconShellComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
