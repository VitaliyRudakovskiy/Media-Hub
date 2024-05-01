'use client'

import { useState } from 'react'

import Chevron from '@/assets/images/chevron.png'
import FAQ_QUESTIONS from '@/constants/faqQuestions'

import * as S from './styled'

const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState()

  return (
    <S.FAQContainer>
      {FAQ_QUESTIONS.map(({ id, question, answer }) => (
        <S.FAQItem key={id}>
          <S.QuestionContainer>
            <S.Question>{question}</S.Question>
            <S.ChevronImage src={Chevron} alt='Chevron icon' width={12} height={12} />
          </S.QuestionContainer>
          <S.Answer>{answer}</S.Answer>
        </S.FAQItem>
      ))}
    </S.FAQContainer>
  )
}

export default FAQComponent
