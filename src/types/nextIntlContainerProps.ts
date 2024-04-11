import { AbstractIntlMessages } from 'next-intl';

export type ContainerProps = {
  locale: string;
  messages: AbstractIntlMessages;
  timeZone: string;
};
