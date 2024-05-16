'use client'

import { memo, useEffect, useState } from 'react'

import { Feedback, FeedbackContainer, ShowMore } from './styled'
import { PostTextProps } from './types'

const MAX_TEXT_SIZE = 250

const PostText = ({ feedback }: PostTextProps) => {
  const [isTextLong, setTextLong] = useState(false)
  const [isExpanded, setExpanded] = useState(false)
  const [shortFeedback, setShortFeedback] = useState('')

  useEffect(() => {
    if (feedback.length > MAX_TEXT_SIZE) {
      setTextLong(true)
      setShortFeedback(feedback.slice(0, MAX_TEXT_SIZE) + '...')
    } else {
      setTextLong(false)
      setShortFeedback(feedback)
    }
  }, [feedback])

  const toggleExpanded = () => setExpanded(!isExpanded)

  return (
    <FeedbackContainer>
      <Feedback>{isExpanded ? feedback : shortFeedback}</Feedback>
      {isTextLong && (
        <ShowMore onClick={toggleExpanded}>{isExpanded ? 'Show less...' : 'Show more...'}</ShowMore>
      )}
    </FeedbackContainer>
  )
}

export default memo(PostText)
