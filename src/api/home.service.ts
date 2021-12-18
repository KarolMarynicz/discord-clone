import { Injectable, OnDestroy } from '@angular/core';
import { ServersService } from "src/api/servers.service";
import { UsersService } from "src/api/users.service";
import { StateService } from "src/app/state/state.service";
import { StateSelector } from "src/models/service.model";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnDestroy {
  private subscription: Subscription | undefined;

  constructor(private servers: ServersService,
              private users: UsersService,
              private state: StateService) {}

  public ngOnDestroy(): void {
    console.log("HomeService ngOnDestroy called.");
    this.subscription?.unsubscribe();
  }

  public getAllData(): void {
    this.state.isLoading = true;

    this.users.loadUserById(1).then();
    this.subscription = this.servers.getAll().subscribe((servers) => {
      this.state.setItems(servers, StateSelector.servers);
      this.state.isLoading = false;
    });
  }
}
