'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Logo from '@/assets/images/logo.webp'
import * as S from '@/constants/formStyles'
import ROUTES from '@/constants/routes'
import { signupDefaultValues, signupInputs } from '@/constants/signupElements'
import setUserToFirestore from '@/firebase/api/setUserToFirestore'
import { useAppDispatch } from '@/store/hooks'
import { selectTheme } from '@/store/slices/themeSlice'
import { setCurrentUser } from '@/store/slices/userSlice'
import { SignupFormType } from '@/types/authFormType'
import { UserWithId } from '@/types/user'
import Button from '@/UI/Button'
import Input from '@/UI/Input'
import { signupErrorToast, signupSuccessToast } from '@/utils/toastManager'
import { signupScheme } from '@/validators/signupScheme'

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(signupScheme),
    defaultValues: signupDefaultValues,
    mode: 'onChange',
  })

  const dispatch = useAppDispatch()
  const theme = useSelector(selectTheme)
  const router = useRouter()

  const onSubmit: SubmitHandler<SignupFormType> = async ({
    name,
    secondName,
    email,
    password,
  }: SignupFormType) => {
    try {
      const { userData }: Partial<UserWithId> = await setUserToFirestore(
        name,
        secondName,
        email,
        password
      )
      dispatch(setCurrentUser({ ...userData }))
      router.push(ROUTES.HOME)
      reset()
      signupSuccessToast(theme, name)
    } catch (error) {
      signupErrorToast(theme)
      setValue('email', '')
      setValue('password', '')
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Image
        src={Logo}
        alt='site logo'
        width={120}
        height={120}
        unoptimized
        quality={100}
        priority
      />
      <S.Header>Sign Up for Media Hub</S.Header>
      <S.InputsContainer>
        {signupInputs.map(({ placeholder, type, name }) => (
          <S.InputWrapper key={name}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors && errors[name] && <S.Error>{errors[name]?.message}</S.Error>}
          </S.InputWrapper>
        ))}
      </S.InputsContainer>
      <Button variant='primary' type='submit' disabled={!isDirty || !isValid || isSubmitting}>
        Create new account
      </Button>
      <S.LinkToOtherForm href={ROUTES.LOGIN}>Already have an account? Log In</S.LinkToOtherForm>
    </S.Form>
  )
}

export default SignupForm
