'use client'

import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from '@/store/slices/userSlice'
import Button from '@/UI/Button'
import sendEmailToMe from '@/utils/sendEmailToMe'
import sendEmailToUser from '@/utils/sendEmailToUser'

import { SELECT_TOPICS } from './constants'
import * as S from './styled'

const SupportForm = () => {
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
      <S.Title>Contact us</S.Title>
      <S.SubTitle>Tell us about your problem and we will help you with it</S.SubTitle>
      <S.Label>Select category</S.Label>
      <S.TopicSelect value={selectedTopic} onChange={handleSelectChange}>
        {SELECT_TOPICS.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </S.TopicSelect>
      <S.Textarea
        placeholder='How can we help?'
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
        {isLoading ? 'Loading...' : 'Send email'}
      </Button>
    </S.SupportForm>
  )
}

export default SupportForm
