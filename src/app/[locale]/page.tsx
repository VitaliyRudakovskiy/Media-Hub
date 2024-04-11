import { redirect } from 'next/navigation';

import ROUTES from '@/constants/routes';

const LocalePage = () => {
  redirect(ROUTES.HOME);
};

export default LocalePage;
