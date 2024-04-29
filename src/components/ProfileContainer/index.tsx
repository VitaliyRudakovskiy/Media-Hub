'use client';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import ROUTES from '@/constants/routes';
import { selectIsAuth } from '@/store/slices/authSlice';
import { selectUser } from '@/store/slices/userSlice';
import { ContainerProps } from '@/types/nextIntlContainerProps';
import Sidebar from '@/UI/Sidebar';

import CreatePostForm from '../CreatePostForm';
import Profile from '../Profile';
import UserPosts from '../UserPosts';

import { MainContent, ProfileSectionWrapper } from './styled';

const ProfileContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth);
  const { email } = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN);
  }, [isAuth, router]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <ProfileSectionWrapper>
        <Sidebar />
        <MainContent>
          <Profile />
          <CreatePostForm />
          <UserPosts userEmail={email} />
        </MainContent>
      </ProfileSectionWrapper>
    </NextIntlClientProvider>
  );
};

export default memo(ProfileContainer);
