'use client';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import ROUTES from '@/constants/routes';
import UsersFeedProvider from '@/providers/UsersFeedProvider';
import { selectIsAuth } from '@/store/slices/authSlice';
import { selectUsers } from '@/store/slices/usersSlice';
import { ContainerProps } from '@/types/nextIntlContainerProps';
import Sidebar from '@/UI/Sidebar';

import UsersFeed from '../UsersFeed';

import { CenterSection, FriendsWrapper } from './styled';

const FriendsContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  const isAuth = useSelector(selectIsAuth);
  const router = useRouter();
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN);
  }, [isAuth, router]);

  // TODO: Всё-таки надо показывать только друзей, а при нажатии на другую кнопку справа показывать уже другой список

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <FriendsWrapper>
        <Sidebar />
        <CenterSection>
          <UsersFeedProvider />
          <UsersFeed renderedUsers={users} feedType='friends' />
          <UsersFeed title='Friend requests' renderedUsers={users} feedType='requests' />
          <UsersFeed title='Sent requests' renderedUsers={users} feedType='sentRequests' />
        </CenterSection>
        <p>ПОИСК ПО ИМЕНИ</p>

        <p>ЗАЯВКИ В ДРУЗЬЯ</p>
        <p>ОТПРАВЛЕННЫЕ ЗАЯВКИ</p>
        <p>ВСЕ ПОЛЬЗОВАТЕЛИ</p>
      </FriendsWrapper>
    </NextIntlClientProvider>
  );
};

export default memo(FriendsContainer);
