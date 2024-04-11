'use client';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import ROUTES from '@/constants/routes';
import { selectIsAuth } from '@/store/slices/authSlice';
import { ContainerProps } from '@/types/nextIntlContainerProps';
import Sidebar from '@/UI/Sidebar';

import Profile from '../Profile';

import { MainContent, ProfileSectionWrapper } from './styled';

const ProfileContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN);
  });

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <ProfileSectionWrapper>
        <Sidebar />
        <MainContent>
          <Profile />
        </MainContent>
      </ProfileSectionWrapper>
    </NextIntlClientProvider>
  );
};

export default memo(ProfileContainer);
