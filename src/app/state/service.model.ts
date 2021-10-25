export interface GlobalState {
  user: User
}

export interface User {
  isMicMuted: boolean,
  isSoundMuted: boolean
}
