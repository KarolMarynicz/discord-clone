import { Status } from "src/models/status.enum";

export interface GlobalState {
  user: User
}

export interface User {
  isMicMuted: boolean,
  isSoundMuted: boolean,
  status: Status;
}
