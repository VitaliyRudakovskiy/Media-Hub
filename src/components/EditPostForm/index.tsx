'use client'

import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import CATEGORIES from '@/constants/categories'
import useOnClickOutside from '@/hooks/useClickOutside'
import StarRating from '@/UI/StarRating'

import * as S from './styled'
import { EditPostFormProps } from './types'

const EditPostForm = ({ postData, handleClose }: EditPostFormProps) => {
  const { feedback, category, title, tags, rating } = postData
  const [starRating, setStarRating] = useState<number | undefined>(rating)
  const formRef = useRef(null)
  useOnClickOutside(formRef, handleClose)

  return createPortal(
    <S.EditPostFormOverlay>
      <S.EditPostFormWrapper ref={formRef}>
        <S.FormTitle>Редактирование поста</S.FormTitle>

        <p>Title</p>
        <input placeholder='Title value' value={title} />

        <p>Feedback</p>
        <textarea placeholder='Feedback value' value={feedback} rows={10} cols={60} />

        <p>Category</p>
        <select value={category}>
          {CATEGORIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <p>Rating</p>
        <StarRating starValue={starRating} setStarValue={setStarRating} />

        <p>Tags</p>
        <input placeholder='Tags' value={tags} />

        <div>IMAGES OMGGG</div>

        <S.CloseButton type='button' onClick={handleClose}>
          &times;
        </S.CloseButton>
      </S.EditPostFormWrapper>
    </S.EditPostFormOverlay>,
    document.body
  )
}

export default EditPostForm
