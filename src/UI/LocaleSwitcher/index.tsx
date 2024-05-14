import LOCALES from '@/constants/locales'
import { usePathname, useRouter } from '@/constants/localeSwitcherConfig'

const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()

  const onButtonClick = (newLocale: string) => () => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div>
      {LOCALES.map((currLocale) => (
        <div
          role='button'
          key={currLocale}
          onClick={onButtonClick(currLocale)}
          onKeyDown={onButtonClick(currLocale)}
          tabIndex={0}
        >
          {currLocale}
        </div>
      ))}
    </div>
  )
}

export default LocaleSwitcher
