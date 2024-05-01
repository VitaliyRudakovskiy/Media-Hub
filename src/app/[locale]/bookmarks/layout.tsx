import { ChildrenProps } from '@/types/childrenType'
import Header from '@/UI/Header'

const BookmarksLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BookmarksLayout
