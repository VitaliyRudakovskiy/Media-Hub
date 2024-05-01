'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'

import Logo from '@/assets/images/logo.png'
import * as Styled from '@/constants/formStyles'
import { loginDefaultValues, loginInputs } from '@/constants/loginElements'
import ROUTES from '@/constants/routes'
import getUserDataAndLogin from '@/firebase/api/getUserDataAndLogin'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentUser } from '@/store/slices/userSlice'
import { LoginFormType } from '@/types/authFormType'
import { UserType } from '@/types/user'
import Button from '@/UI/Button'
import Input from '@/UI/Input'
import loginScheme from '@/validators/loginScheme'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(loginScheme),
    defaultValues: loginDefaultValues,
    mode: 'onChange',
  })

  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = async ({ email, password }: LoginFormType) => {
    try {
      const { userData, token } = await getUserDataAndLogin(email, password)

      if (token) {
        dispatch(setCurrentUser({ ...(userData as UserType), token }))
        router.push(ROUTES.HOME)
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      throw new Error(`An error occured while submitting login form: ${error}`)
    } finally {
      reset()
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Picture src={Logo} alt='site logo' />
      <Styled.Header>Sign Up for Media Hub</Styled.Header>
      <Styled.InputsContainer>
        {loginInputs.map(({ placeholder, type, name }) => (
          <Styled.InputWrapper key={name}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors && errors[name] && <Styled.Error>{errors[name]?.message}</Styled.Error>}
          </Styled.InputWrapper>
        ))}
      </Styled.InputsContainer>
      <Button variant='primary' type='submit' disabled={!isDirty || !isValid || isSubmitting}>
        Log In to account
      </Button>
    </Styled.Form>
  )
}

export default LoginForm
