'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import CATEGORIES from '@/constants/categories'
import getFilesFromStorage from '@/firebase/api/getFilesFromStorage'
import updatePost from '@/firebase/api/updatePost'
import useOnClickOutside from '@/hooks/useClickOutside'
import { selectUser } from '@/store/slices/userSlice'
import { PostType } from '@/types/postType'
import { VisibilityType } from '@/types/visibilityType'
import Button from '@/UI/Button'
import StarRating from '@/UI/StarRating'
import { editPostScheme, EditPostType } from '@/validators/editPostScheme'

import AddNewFile from '../AddNewFile'
import EditPostFiles from '../EditPostFiles'

import { VISIBILITIES } from './constants'
import defineResultFiles from './helpers'
import * as S from './styled'
import { EditPostFormProps, NewFileType } from './types'

const EditPostForm = ({ postId, postData, handleClose }: EditPostFormProps) => {
  const t = useTranslations('')

  const { feedback, category, title, tags, rating, visibility, files } = postData

  const editPostDefaultValues = {
    title: title,
    feedback: feedback,
    category: category,
    tags: tags,
    visibility: visibility,
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(editPostScheme),
    defaultValues: editPostDefaultValues,
    mode: 'onChange',
  })

  const [starRating, setStarRating] = useState<number | undefined>(rating)
  const [fileLinks, setFileLinks] = useState<string[]>([])
  const [newFiles, setNewFiles] = useState<File[]>([])
  const [updatedFiles, setUpdatedFiles] = useState<NewFileType[]>([])
  const [isRatingChanged, setRatingChanged] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const { email } = useSelector(selectUser)
  const formRef = useRef(null)
  useOnClickOutside(formRef, handleClose)

  useEffect(() => {
    if (rating !== starRating) setRatingChanged(true)
  }, [rating, starRating])

  useEffect(() => {
    const getFiles = async () => {
      const downloadedFiles = await getFilesFromStorage(files)
      setFileLinks(downloadedFiles)
    }
    getFiles()
  }, [files])

  const onSubmit = async (data: EditPostType) => {
    const updatedValues: Partial<PostType> = {}

    if (data.title !== editPostDefaultValues.title) updatedValues.title = data.title
    if (data.category !== editPostDefaultValues.category) updatedValues.category = data.category
    if (data.feedback !== editPostDefaultValues.feedback) updatedValues.feedback = data.feedback
    if (data.tags !== editPostDefaultValues.tags) updatedValues.tags = data.tags
    if (data.visibility !== editPostDefaultValues.visibility)
      updatedValues.visibility = data.visibility as VisibilityType
    if (isRatingChanged) updatedValues.rating = starRating

    const { filesToDelete, filesToAdd } = defineResultFiles(updatedFiles)

    try {
      setLoading(true)
      await updatePost(postId, email, updatedValues, filesToDelete, filesToAdd, newFiles)
    } catch (error) {
      throw new Error(`An error occured editing post: ${error}`)
    } finally {
      handleClose()
      setLoading(false)
    }
  }

  return createPortal(
    <S.EditPostFormOverlay>
      <S.EditPostFormWrapper ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <S.FormTitle>Редактирование поста</S.FormTitle>

        <S.Label>Title</S.Label>
        <input {...register('title')} placeholder='Title value' />
        {errors && errors['title'] && <S.Error>{errors['title']?.message}</S.Error>}

        <S.Label>Feedback</S.Label>
        <input {...register('feedback')} placeholder='Feedback value' />

        <S.Label>Category</S.Label>
        <select {...register('category')}>
          {CATEGORIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <S.StarContainer>
          <StarRating
            label={t('createPostForm.labels.rating')}
            starValue={starRating}
            setStarValue={setStarRating}
          />
        </S.StarContainer>

        <S.Label>Tags</S.Label>
        <input {...register('tags')} placeholder='Tags' />
        {errors && errors['tags'] && <S.Error>{errors['tags']?.message}</S.Error>}

        <S.Label>Visibility</S.Label>
        <select {...register('visibility')}>
          {VISIBILITIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {fileLinks && fileLinks.length > 0 && (
          <EditPostFiles
            fileLinks={fileLinks}
            updatedFiles={updatedFiles}
            setUpdatedFiles={setUpdatedFiles}
          />
        )}

        <AddNewFile
          newFiles={newFiles}
          setNewFiles={setNewFiles}
          updatedFiles={updatedFiles}
          setUpdatedFiles={setUpdatedFiles}
        />

        <Button
          type='submit'
          variant='primary'
          disabled={
            ((!isDirty || !isValid) && !isRatingChanged && !updatedFiles.length) || isLoading
          }
        >
          {isLoading ? 'Loading...' : 'Save changes'}
        </Button>

        <S.CloseButton type='button' onClick={handleClose}>
          &times;
        </S.CloseButton>
      </S.EditPostFormWrapper>
    </S.EditPostFormOverlay>,
    document.body
  )
}

export default memo(EditPostForm)
