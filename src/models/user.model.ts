import { Status } from "src/models/status.enum";

export interface UserModel {
  id: number,
  user: User
}

export interface User {
  name: string,
  isMicMuted: boolean,
  isSoundMuted: boolean,
  status: Status;
}

export function makeUser(newUser: Partial<UserModel>, currentUser: UserModel): UserModel {
  return {
    id: newUser.id || currentUser.id,
    user: {
      name: newUser.user?.name ?? currentUser.user.name,
      status: newUser.user?.status ?? currentUser.user.status,
      isSoundMuted: newUser.user?.isSoundMuted ?? currentUser.user.isSoundMuted,
      isMicMuted: newUser.user?.isMicMuted ?? currentUser.user.isMicMuted
    }
  }
}
