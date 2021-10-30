import { Injectable } from '@angular/core';
import { ServerModel } from 'src/models/server.model';
import { ServiceBase } from "src/api/service-base";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServersService extends ServiceBase<ServerModel> {
  constructor(http: HttpClient) {
    super('servers', http);
  }
}
