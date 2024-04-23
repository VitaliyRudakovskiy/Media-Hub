'use client';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import ROUTES from '@/constants/routes';
import { selectIsAuth } from '@/store/slices/authSlice';
import { ContainerProps } from '@/types/nextIntlContainerProps';
import Sidebar from '@/UI/Sidebar';

import UsersFeed from '../UsersFeed';
import UsersSearchSortLogic from '../UsersSortSearchLogic';

import { CenterSection, FriendsWrapper } from './styled';

const FriendsContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN);
  }, [isAuth, router]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <FriendsWrapper>
        <Sidebar />
        <CenterSection>
          <UsersFeed />
        </CenterSection>
        <UsersSearchSortLogic />
      </FriendsWrapper>
    </NextIntlClientProvider>
  );
};

export default memo(FriendsContainer);
