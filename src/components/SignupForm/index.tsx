'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import Logo from '@/assets/images/logo.png';
import * as Styled from '@/constants/formStyles';
import ROUTES from '@/constants/routes';
import { signupDefaultValues, signupInputs } from '@/constants/signupElements';
import setUserToFirestore from '@/firebase/api/setUserToFirestore';
import { useAppDispatch } from '@/store/hooks';
import { setCurrentUser } from '@/store/slices/userSlice';
import { SignupFormType } from '@/types/authFormType';
import { UserWithId } from '@/types/user';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import { signupScheme } from '@/validators/signupScheme';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(signupScheme),
    defaultValues: signupDefaultValues,
    mode: 'onChange',
  });

  const dispatch = useAppDispatch();
  const router = useRouter();

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
      );
      dispatch(setCurrentUser({ ...userData }));
      router.push(ROUTES.HOME);
    } catch (error) {
      throw new Error(`An error occured while submitting form: ${error}`);
    } finally {
      reset();
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Picture src={Logo} alt='site logo' />
      <Styled.Header>Sign Up for Media Hub</Styled.Header>
      <Styled.InputsContainer>
        {signupInputs.map(({ placeholder, type, name }) => (
          <Styled.InputWrapper key={name}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors && errors[name] && <Styled.Error>{errors[name]?.message}</Styled.Error>}
          </Styled.InputWrapper>
        ))}
      </Styled.InputsContainer>
      <Button variant='primary' type='submit' disabled={!isDirty || !isValid || isSubmitting}>
        Create new account
      </Button>
    </Styled.Form>
  );
};

export default SignupForm;
