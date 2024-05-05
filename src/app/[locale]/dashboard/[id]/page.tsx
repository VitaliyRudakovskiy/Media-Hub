import { useMessages, useTimeZone } from 'next-intl'
import { unstable_setRequestLocale as setLocale } from 'next-intl/server'

import PostContainer from '@/components/PostContainer'

import { PostProps } from './types'

const Post = ({ params: { locale, id } }: PostProps) => {
  setLocale(locale)
  const messages = useMessages()
  const timeZone = useTimeZone() as string

  return (
    <main>
      <PostContainer locale={locale} timeZone={timeZone} messages={messages} postId={id} />
    </main>
  )
}

export default Post
