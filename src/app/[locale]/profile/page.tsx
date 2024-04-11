import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import ProfileContainer from '@/components/ProfileContainer';
import { LocaleParams } from '@/types/locale';

const Profile = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <main>
      <ProfileContainer locale={locale} timeZone={timeZone} messages={messages} />
    </main>
  );
};

export default Profile;
