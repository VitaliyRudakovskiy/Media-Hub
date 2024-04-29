import { ChildrenProps } from '@/types/childrenType';
import Header from '@/UI/Header';

const SupportLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SupportLayout;
