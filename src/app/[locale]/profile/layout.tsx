import { ChildrenProps } from '@/types/childrenType';
import Header from '@/UI/Header';

const ProfileLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ProfileLayout;
