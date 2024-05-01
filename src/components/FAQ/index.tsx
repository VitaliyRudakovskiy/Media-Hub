'use client'

import { useState } from 'react'

import Chevron from '@/assets/images/chevron.png'
import FAQ_QUESTIONS from '@/constants/faqQuestions'

import * as S from './styled'

const FAQComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(FAQ_QUESTIONS[0].id)

  const handleClick = (id: string) => setActiveQuestion(id)

  return (
    <S.FAQContainer>
      <S.FAQTitle>FAQ</S.FAQTitle>
      {FAQ_QUESTIONS.map(({ id, question, answer }) => (
        <S.FAQItem key={id}>
          <S.QuestionContainer onClick={() => handleClick(id)} $isActive={activeQuestion === id}>
            <S.Question>{question}</S.Question>
            <S.ChevronImage
              src={Chevron}
              alt='Chevron icon'
              $isActive={activeQuestion === id}
              width={12}
              height={12}
            />
          </S.QuestionContainer>
          <S.Answer $isActive={activeQuestion === id}>{answer}</S.Answer>
        </S.FAQItem>
      ))}
    </S.FAQContainer>
  )
}

export default FAQComponent
