export enum UsersVariants {
  FRIENDS = 'friends',
  REQUESTS = 'requests',
  SENT_REQUESTS = 'sentRequests',
  ALL_USERS = 'allUsers',
}

const usersSortTiles = [
  {
    id: UsersVariants.FRIENDS,
    text: 'myFriends',
  },
  {
    id: UsersVariants.REQUESTS,
    text: 'requests',
  },
  {
    id: UsersVariants.SENT_REQUESTS,
    text: 'sentRequests',
  },
  {
    id: UsersVariants.ALL_USERS,
    text: 'allUsers',
  },
]

export default usersSortTiles
