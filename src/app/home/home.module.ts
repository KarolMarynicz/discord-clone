import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/home/home.component";
import { ServersListComponent } from "src/app/home/servers-list/servers-list.component";
import { ServersListItemComponent } from './servers-list-item/servers-list-item.component';
import { TooltipModule } from 'primeng/tooltip';
import { FeaturesListComponent } from './features-list/features-list.component';
import { UserPanelComponent } from './user-panel/user-panel.component'
import { ButtonModule } from "primeng/button";
import { UserPanelShellComponent } from './user-panel-shell/user-panel-shell.component';
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ServersListShellComponent } from './servers-list-shell/servers-list-shell.component';
import { MenuModule } from "primeng/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChannelsModule } from "src/app/channels/channels.module";

@NgModule({
	declarations: [
    HomeComponent,
    ServersListComponent,
    ServersListItemComponent,
    FeaturesListComponent,
    UserPanelComponent,
    UserPanelShellComponent,
    ServersListShellComponent,
  ],
	imports: [
		TooltipModule,
		CommonModule,
		ButtonModule,
		TranslateModule,
		SharedModule,
		RouterModule,
		MenuModule,
		BrowserAnimationsModule,
		ChannelsModule
	],
})
export class HomeModule { }
