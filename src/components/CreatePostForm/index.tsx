'use client'

import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'

import CATEGORIES from '@/constants/categories'
import { createPostDefaultValues } from '@/constants/createPostDefaultValues'
import uploadPost from '@/firebase/api/uploadPost'
import useOnClickOutside from '@/hooks/useClickOutside'
import { selectTheme } from '@/store/slices/themeSlice'
import { selectUser } from '@/store/slices/userSlice'
import { CreatePostFormType } from '@/types/authFormType'
import { VisibilityType } from '@/types/visibilityType'
import CurrentAvatar from '@/UI/Avatars/CurrentAvatar'
import Select from '@/UI/Select'
import StarRating from '@/UI/StarRating'
import UploadedFile from '@/UI/UploadedFile'
import { createPostFormErrorToast, createPostFormSuccessToast } from '@/utils/toastManager'
import { createPostScheme } from '@/validators/createPostScheme'

import { defineClipIcon, defineSwapIcon } from './helpers'
import * as S from './styled'

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<CreatePostFormType>({
    resolver: zodResolver(createPostScheme),
    defaultValues: createPostDefaultValues,
    mode: 'onChange',
  })

  const t = useTranslations('createPostForm')

  const [isFormFocused, setIsFormFocused] = useState(false)
  const [postText, setPostText] = useState('')
  const [starValue, setStarValue] = useState<number | undefined>(0)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [fileNames, setFileNames] = useState<string[]>([])
  const [postVisibility, setPostVisibility] = useState<VisibilityType>('public')
  const [isPostLoading, setIsPostLoading] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const { name, secondName, email } = useSelector(selectUser)
  const theme = useSelector(selectTheme)

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
  }, [postText])

  const handleUnfocusForm = () => {
    if (postText || selectedFiles.length) return
    setIsFormFocused(false)
  }

  useOnClickOutside(formRef, handleUnfocusForm)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles(filesArray)
      setFileNames(filesArray.map((file) => file.name))
    }
    setIsFormFocused(true)
  }

  const handleRemoveFile = (index: number) => {
    const newFilesArray = [...selectedFiles]
    newFilesArray.splice(index, 1)
    setSelectedFiles(newFilesArray)

    const newFileNamesArray = [...fileNames]
    newFileNamesArray.splice(index, 1)
    setFileNames(newFileNamesArray)
  }

  const handleFocusForm = () => setIsFormFocused(true)
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value)
  const handleToggleVisibility = () =>
    setPostVisibility((prevVisibility) => (prevVisibility === 'private' ? 'public' : 'private'))

  const onSubmit: SubmitHandler<CreatePostFormType> = async ({
    title,
    tags,
    category,
  }: CreatePostFormType) => {
    const fullName = `${name} ${secondName}`

    try {
      await uploadPost(
        title,
        postText,
        tags,
        category,
        fullName,
        email,
        selectedFiles,
        postVisibility,
        setIsPostLoading,
        starValue
      )
      createPostFormSuccessToast(theme)
    } catch (error) {
      createPostFormErrorToast(theme)
    } finally {
      reset()
      setSelectedFiles([])
      setFileNames([])
      setPostText('')
      setStarValue(0)
      setIsFormFocused(false)
    }
  }

  return (
    <S.CreateForm onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <S.MainContent $isFormFocused={isFormFocused}>
        <CurrentAvatar />
        <S.InfoContainer>
          {isFormFocused && <S.TitleLabel>{t(`labels.title`)}</S.TitleLabel>}
          <S.TitleInput
            {...register('title')}
            placeholder={t(`placeholders.title`)}
            onFocus={handleFocusForm}
            $isFormFocused={isFormFocused}
          />
          {isFormFocused && (
            <>
              {errors && errors['title'] && (
                <S.ErrorMessage>{errors['title']?.message}</S.ErrorMessage>
              )}
              <S.DescriptionLabel>{t(`labels.feedback`)}</S.DescriptionLabel>
              <S.Textarea
                ref={textareaRef}
                value={postText}
                onChange={handleChangeTextarea}
                placeholder={t(`placeholders.feedback`)}
                rows={1}
              />
              <Select
                {...register('category')}
                placeholder={t(`labels.category`)}
                options={CATEGORIES}
              />
              <StarRating
                label={t('labels.rating')}
                starValue={starValue}
                setStarValue={setStarValue}
              />
              <S.TagsLabel>{t(`labels.tags`)}</S.TagsLabel>
              <S.TagsInput {...register('tags')} placeholder={t(`placeholders.tags`)} />
              {errors && errors['tags'] && (
                <S.ErrorMessage>{errors['tags']?.message}</S.ErrorMessage>
              )}
            </>
          )}
        </S.InfoContainer>
        <S.UploadFileLabel>
          <S.UploadFile
            src={defineClipIcon(theme)}
            alt='upload image clip'
            width={20}
            height={20}
          />
          <S.InputForFile
            id='upload-file'
            type='file'
            multiple
            accept='.png, .jpg, .jpeg, .webp'
            onChange={handleFileChange}
          />
        </S.UploadFileLabel>
      </S.MainContent>

      {isFormFocused && (
        <S.ExpandedContent>
          <S.FilesContainer>
            {fileNames.length > 0 &&
              fileNames.map((filename, index) => (
                <UploadedFile
                  key={filename}
                  filename={filename}
                  index={index}
                  onRemove={handleRemoveFile}
                />
              ))}
          </S.FilesContainer>
          <S.ButtonsContainer>
            <S.VisibilityButton
              variant='secondary'
              icon={defineSwapIcon(theme)}
              onClick={handleToggleVisibility}
            >
              {postVisibility}
            </S.VisibilityButton>
            <S.SubmitButton
              variant='primary'
              type='submit'
              title='You should fill name, feedback and rating fields'
              disabled={
                (fileNames.length === 0 && !postText) ||
                !starValue ||
                isPostLoading ||
                !isValid ||
                !isDirty
              }
            >
              {isPostLoading ? 'Загрузка...' : 'Создать пост'}
            </S.SubmitButton>
          </S.ButtonsContainer>
        </S.ExpandedContent>
      )}
    </S.CreateForm>
  )
}

export default CreatePostForm
