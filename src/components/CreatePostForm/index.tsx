'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';

import Clip from '@/assets/images/clip.png';
import Exchange from '@/assets/images/exchange.png';
import CATEGORIES from '@/constants/categories';
import { createPostDefaultValues } from '@/constants/createPostDefaultValues';
import uploadPost from '@/firebase/api/uploadPost';
import useOnClickOutside from '@/hooks/useClickOutside';
import { selectUser } from '@/store/slices/userSlice';
import { CreatePostFormType } from '@/types/authFormType';
import { VisibilityType } from '@/types/visibilityType';
import CurrentAvatar from '@/UI/Avatars/CurrentAvatar';
import Select from '@/UI/Select';
import StarRating from '@/UI/StarRating';
import { createPostScheme } from '@/validators/createPostScheme';

import * as S from './styled';
import UploadedFile from './UploadedFile';

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
  });

  const [isFormFocused, setIsFormFocused] = useState(false);
  const [postText, setPostText] = useState('');
  const [starValue, setStarValue] = useState<number | undefined>(0);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const [postVisibility, setPostVisibility] = useState<VisibilityType>('public');
  const [isPostLoading, setIsPostLoading] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { name, secondName, email } = useSelector(selectUser);

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [postText]);

  const handleUnfocusForm = () => {
    if (postText || selectedFiles.length) return;
    setIsFormFocused(false);
  };
  useOnClickOutside(formRef, handleUnfocusForm);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
      setFileNames(filesArray.map((file) => file.name));
    }
    setIsFormFocused(true);
  };

  const handleRemoveFile = (index: number) => {
    const newFilesArray = [...selectedFiles];
    newFilesArray.splice(index, 1);
    setSelectedFiles(newFilesArray);

    const newFileNamesArray = [...fileNames];
    newFileNamesArray.splice(index, 1);
    setFileNames(newFileNamesArray);
  };

  const handleFocusForm = () => setIsFormFocused(true);
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value);

  const handleToggleVisibility = () =>
    setPostVisibility((prevVisibility) => (prevVisibility === 'private' ? 'public' : 'private'));

  const onSubmit: SubmitHandler<CreatePostFormType> = async ({
    title,
    tags,
    category,
  }: CreatePostFormType) => {
    const fullName = `${name} ${secondName}`;

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
      );
    } catch (error) {
      throw Error(`Error in Create Post component: ${error}`);
    } finally {
      reset();
      setSelectedFiles([]);
      setFileNames([]);
      setPostText('');
      setStarValue(0);
      setIsFormFocused(false);
    }
  };

  return (
    <S.CreateForm onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <S.MainContent $isFormFocused={isFormFocused}>
        <CurrentAvatar />
        <S.InfoContainer>
          <S.TitleInput
            {...register('title')}
            placeholder='Введите название вашего ресурса'
            onFocus={handleFocusForm}
          />
          {isFormFocused && (
            <>
              {errors && errors['title'] && (
                <S.ErrorMessage>{errors['title']?.message}</S.ErrorMessage>
              )}
              <S.Textarea
                ref={textareaRef}
                value={postText}
                onChange={handleChangeTextarea}
                placeholder='Расскажите ваше мнение о нем'
              />
              <Select {...register('category')} placeholder='Категория' options={CATEGORIES} />
              <StarRating starValue={starValue} setStarValue={setStarValue} />
              <S.TagsInput {...register('tags')} placeholder='Введите тэги через запятую' />
            </>
          )}
        </S.InfoContainer>

        <S.UploadFileLabel>
          <S.UploadFile src={Clip} alt='upload image clip' width={20} height={20} />
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
              icon={Exchange}
              onClick={handleToggleVisibility}
            >
              {postVisibility}
            </S.VisibilityButton>
            <S.SubmitButton
              variant='primary'
              type='submit'
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
  );
};

export default CreatePostForm;
