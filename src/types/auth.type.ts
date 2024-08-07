
export type authType = {
  authed: boolean,
  login: () => Promise<void>,
  logout: () => Promise<void>

}