import { ChildrenProps } from '@/types/childrenType'
import Header from '@/UI/Header'

const DashboardLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default DashboardLayout
