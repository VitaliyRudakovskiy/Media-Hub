import { ChildrenProps } from '@/types/childrenType';
import Header from '@/UI/Header';

const FriendsLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default FriendsLayout;
