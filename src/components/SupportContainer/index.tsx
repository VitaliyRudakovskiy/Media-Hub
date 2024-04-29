'use client';

import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import ROUTES from '@/constants/routes';
import { selectIsAuth } from '@/store/slices/authSlice';
import { ContainerProps } from '@/types/nextIntlContainerProps';
import Sidebar from '@/UI/Sidebar';

import SupportForm from '../SupportForm';

import { SupportWrapper } from './styled';

const SupportContainer = ({ locale, messages, timeZone }: ContainerProps) => {
  // TODO: Сделать FAQ, то есть список самых часто задаваемых вопросов (чтобы при нажатии он раскрывался)

  // ? Как стать админом
  // ? Будет ли мобильная версия и будут ли в ней дополнительные функции
  // ? Как долго держится сессия текущего пользователя (1 день)
  // ? Для чего нужно описание пользователя и favourites
  // ? Как добавить в аккаунт список любимых файлов

  const isAuth = useSelector(selectIsAuth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push(ROUTES.LOGIN);
  }, [isAuth, router]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      <SupportWrapper>
        <Sidebar />
        <SupportForm />
      </SupportWrapper>
    </NextIntlClientProvider>
  );
};

export default memo(SupportContainer);
