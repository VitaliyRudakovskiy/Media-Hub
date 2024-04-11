'use client';

import { logout } from '@/firebase';
import { useAppDispatch } from '@/store/hooks';
import { setCurrentUser } from '@/store/slices/userSlice';

import StyledButton from './styled';

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout();

    dispatch(
      setCurrentUser({
        id: '',
        name: '',
        secondName: '',
        email: '',
        phone: '',
        token: null,
      })
    );
  };

  return <StyledButton onClick={handleLogout}>Log out</StyledButton>;
};

export default LogoutButton;
