import { useMessages, useTimeZone } from 'next-intl';
import { unstable_setRequestLocale as setLocale } from 'next-intl/server';

import BookmarksContainer from '@/components/BookmarksContainer';
import { LocaleParams } from '@/types/locale';

const Bookmarks = ({ params: { locale } }: LocaleParams) => {
  setLocale(locale);
  const messages = useMessages();
  const timeZone = useTimeZone() as string;

  return (
    <main>
      <BookmarksContainer locale={locale} timeZone={timeZone} messages={messages} />
    </main>
  );
};

export default Bookmarks;
