
export type AuthType = {
  authed: boolean,
  login: () => Promise<void>,
  logout: () => Promise<void>

}