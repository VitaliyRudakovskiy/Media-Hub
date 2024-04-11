'use client';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import ROUTES from '@/constants/routes';
import { selectIsAuth } from '@/store/slices/authSlice';
import { ContainerProps } from '@/types/nextIntlContainerProps';
import Sidebar from '@/UI/Sidebar';

import CreatePostForm from '../CreatePostForm';
import Feed from '../Feed';
import SearchSortLogic from '../SearchSortLogic';

import { CenterSection, HomeWrapper } from './styled';

const HomeContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN);
  });

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <HomeWrapper>
        <Sidebar />
        <CenterSection>
          <CreatePostForm />
          <Feed />
        </CenterSection>
        <SearchSortLogic />
      </HomeWrapper>
    </NextIntlClientProvider>
  );
};

export default memo(HomeContainer);
