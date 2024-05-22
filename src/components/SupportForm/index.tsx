'use client'

import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

import { selectUser } from '@/store/slices/userSlice'
import Button from '@/UI/Button'
import sendEmailToMe from '@/utils/sendEmailToMe'
import sendEmailToUser from '@/utils/sendEmailToUser'

import { SELECT_TOPICS } from './constants'
import * as S from './styled'

const SupportForm = () => {
  const t = useTranslations('support')
  const [selectedTopic, setSelectedTopic] = useState(SELECT_TOPICS[0])
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { email } = useSelector(selectUser)

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedTopic(e.target.value)
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

  const handleSendMessage = async (e: SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await sendEmailToMe(email, selectedTopic, message)
      await sendEmailToUser(email, selectedTopic)
    } catch (error) {
      throw new Error(`Something went wrong while sending message: ${error}`)
    } finally {
      setIsLoading(false)
      setMessage('')
      setSelectedTopic(SELECT_TOPICS[0])
    }
  }

  return (
    <S.SupportForm onSubmit={handleSendMessage}>
      <S.Title>{t('title')}</S.Title>
      <S.SubTitle>{t('description')}</S.SubTitle>
      <S.Label>{t('selectLabel')}</S.Label>
      <S.TopicSelect value={selectedTopic} onChange={handleSelectChange}>
        {SELECT_TOPICS.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </S.TopicSelect>
      <S.Textarea
        placeholder={t('placeholder')}
        rows={5}
        value={message}
        onChange={handleTextareaChange}
      />
      <Button
        type='submit'
        variant='primary'
        width='100%'
        disabled={message.length === 0 || isLoading}
      >
        {isLoading ? `${t('sending')}` : `${t('submit')}`}
      </Button>
    </S.SupportForm>
  )
}

export default SupportForm
