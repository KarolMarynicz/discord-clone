import { UserModel } from "src/models/user.model";
import { ServerModel } from "src/models/server.model";

export interface GlobalState {
  user: UserModel,
  [StateSelector.servers]: Array<ServerModel>,
  [StateSelectedSelector.selectedServer]: string
}

export enum StateSelector {
  servers = 'servers'
}

export enum StateSelectedSelector {
  selectedServer = 'selectedServers'
}
