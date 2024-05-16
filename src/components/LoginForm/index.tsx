'use client'

import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Logo from '@/assets/images/logo.webp'
import * as S from '@/constants/formStyles'
import { loginDefaultValues, loginInputs } from '@/constants/loginElements'
import ROUTES from '@/constants/routes'
import getUserDataAndLogin from '@/firebase/api/getUserDataAndLogin'
import { useAppDispatch } from '@/store/hooks'
import { selectTheme } from '@/store/slices/themeSlice'
import { setCurrentUser } from '@/store/slices/userSlice'
import { LoginFormType } from '@/types/authFormType'
import { UserType } from '@/types/user'
import Button from '@/UI/Button'
import Input from '@/UI/Input'
import {
  loginErrorCredentialsToast,
  loginErrorToast,
  loginSuccessToast,
} from '@/utils/toastManager'
import loginScheme from '@/validators/loginScheme'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(loginScheme),
    defaultValues: loginDefaultValues,
    mode: 'onChange',
  })

  const dispatch = useAppDispatch()
  const theme = useSelector(selectTheme)
  const router = useRouter()

  const onSubmit = async ({ email, password }: LoginFormType) => {
    try {
      const { userData, token } = await getUserDataAndLogin(email, password)

      if (token) {
        dispatch(setCurrentUser({ ...(userData as UserType), token }))
        router.push(ROUTES.HOME)
        loginSuccessToast(theme, userData?.name)
      } else loginErrorToast(theme)

      reset()
    } catch (error) {
      loginErrorCredentialsToast(theme)
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
        {loginInputs.map(({ placeholder, type, name }) => (
          <S.InputWrapper key={name}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors && errors[name] && <S.Error>{errors[name]?.message}</S.Error>}
          </S.InputWrapper>
        ))}
      </S.InputsContainer>
      <Button variant='primary' type='submit' disabled={!isDirty || !isValid || isSubmitting}>
        Log In to account
      </Button>
      <S.LinkToOtherForm href={ROUTES.SIGNUP}>Dont`t have an account? Sign Up</S.LinkToOtherForm>
    </S.Form>
  )
}

export default LoginForm
