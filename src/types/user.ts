export type UserType = {
  id: string
  name: string
  secondName: string
  email: string
  avatarName: string | null
  description: string
  favourites: string
  requests: Array<string>
  sentRequests: Array<string>
  friends: Array<string>
  role: string
  token: string | null
}

export type UserWithId = {
  id: string
  userData: UserType
}
