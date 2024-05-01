import { NoUsersVariants } from '@/constants/noUsersVariants'
import { UsersVariants } from '@/constants/usersSortTiles'
import { UserTitles } from '@/constants/userTitles'

const defineConfig = (activeTile: string) => {
  switch (activeTile) {
    case UsersVariants.FRIENDS:
      return { title: UserTitles.Friends, noUsers: NoUsersVariants.NoFriends }
    case UsersVariants.REQUESTS:
      return { title: UserTitles.Requests, noUsers: NoUsersVariants.NoRequests }
    case UsersVariants.SENT_REQUESTS:
      return { title: UserTitles.SentRequests, noUsers: NoUsersVariants.NoSentRequests }
    case UsersVariants.ALL_USERS:
      return { title: UserTitles.AllUsers, noUsers: NoUsersVariants.NoUsers }
    default:
      return { title: 'Error', noUsers: 'Error' }
  }
}

export default defineConfig
