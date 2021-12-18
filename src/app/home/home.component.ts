import { Component, OnInit } from '@angular/core';
import { StateService } from "src/app/state/state.service";
import { HomeService } from "src/api/home.service";
import { Observable } from "rxjs";
import { ServerModel } from "src/models/server.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  public get isLoading(): boolean {
    return this.state.isLoading;
  }
  public get selectedChannel(): Observable<ServerModel | undefined> {
    return this.state.selectedServer$;
  }

  constructor(private state: StateService,
              private home: HomeService) { }

  public ngOnInit(): void {
    this.home.getAllData();
  }
}
