import { Component, OnInit } from '@angular/core';
import { ServersService } from "src/api/servers.service";
import { Observable } from "rxjs";
import { ServerModel } from "src/models/server.model";

@Component({
  selector: 'app-servers-list-shell',
  templateUrl: './servers-list-shell.component.html',
  styleUrls: ['./servers-list-shell.component.sass']
})
export class ServersListShellComponent implements OnInit {
  constructor(private servers: ServersService) { }

  // @ts-ignore
  public servers$: Observable<Array<ServerModel>>;

  public ngOnInit(): void {
    this.servers$ = this.servers.getAll();
  }
}
