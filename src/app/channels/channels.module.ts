import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeChannelComponent } from './home-channel/home-channel.component';
import { CustomChannelComponent } from './custom-channel/custom-channel.component';
import { TranslateModule } from "@ngx-translate/core";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [
    HomeChannelComponent,
    CustomChannelComponent
  ],
	imports: [
		CommonModule,
		TranslateModule,
		TooltipModule
	],
  exports: [
    HomeChannelComponent,
    CustomChannelComponent
  ]
})
export class ChannelsModule { }
