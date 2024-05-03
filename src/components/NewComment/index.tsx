'use client'

import { ChangeEvent, memo, SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import addComment from '@/firebase/api/addComment'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'
import CurrentAvatar from '@/UI/Avatars/CurrentAvatar'

import defineSubmitIcon from './defineSubmitIcon'
import * as S from './styled'
import { NewCommentProps } from './types'

const NewComment = ({ postId }: NewCommentProps) => {
  const [comment, setComment] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { email, name, secondName } = useSelector(selectUser)
  const theme = useSelector(selectTheme)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setComment(e.target.value)

  const handleCreateComment = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (!comment) return
    const fullName = `${name} ${secondName}`

    try {
      setIsLoading(true)
      await addComment(postId, comment, fullName, email)
    } catch (error) {
      throw Error(`Error in Create Post component: ${error}`)
    } finally {
      setIsLoading(false)
      setComment('')
    }
  }

  return (
    <S.CommentSection>
      <CurrentAvatar />
      <S.CommentForm onSubmit={handleCreateComment}>
        <S.CommentInput
          placeholder={isLoading ? 'Загрузка...' : 'Написать комментарий'}
          value={comment}
          onChange={handleInputChange}
        />
        <S.SubmitButton type='submit'>
          <S.SubmitIcon
            src={defineSubmitIcon(theme)}
            alt='submit comment icon'
            title='Submit comment'
            width={22}
            height={22}
          />
        </S.SubmitButton>
      </S.CommentForm>
    </S.CommentSection>
  )
}

export default memo(NewComment)
