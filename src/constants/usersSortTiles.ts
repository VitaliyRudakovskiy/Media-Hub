export enum UsersVariants {
  FRIENDS = 'friends',
  REQUESTS = 'requests',
  SENT_REQUESTS = 'sentRequests',
  ALL_USERS = 'allUsers',
}

const usersSortTiles = [
  {
    id: UsersVariants.FRIENDS,
    text: 'Мои друзья',
  },
  {
    id: UsersVariants.REQUESTS,
    text: 'Заявки в друзья',
  },
  {
    id: UsersVariants.SENT_REQUESTS,
    text: 'Отправленные заявки',
  },
  {
    id: UsersVariants.ALL_USERS,
    text: 'Все польззователи',
  },
];

export default usersSortTiles;
