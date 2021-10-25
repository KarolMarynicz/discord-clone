import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "src/app/home/home.component";
import { ServersListComponent } from "src/app/home/servers-list/servers-list.component";
import { ServersListItemComponent } from './servers-list-item/servers-list-item.component';
import { TooltipModule } from 'primeng/tooltip';
import { FeaturesListComponent } from './features-list/features-list.component';
import { UserPanelComponent } from './user-panel/user-panel.component'
import { ButtonModule } from "primeng/button";
import { UserPanelShellComponent } from './user-panel-shell/user-panel-shell.component';

@NgModule({
	declarations: [
    HomeComponent,
    ServersListComponent,
    ServersListItemComponent,
    FeaturesListComponent,
    UserPanelComponent,
    UserPanelShellComponent,
  ],
	imports: [
		TooltipModule,
		CommonModule,
		ButtonModule
	],
})
export class HomeModule { }
