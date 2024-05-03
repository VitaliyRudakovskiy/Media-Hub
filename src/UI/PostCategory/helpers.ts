import BookIcon from '@/assets/icons/categoryIcons/book-icon.webp'
import CartoonIcon from '@/assets/icons/categoryIcons/cartoon-icon.webp'
import FilmIcon from '@/assets/icons/categoryIcons/film-icon.webp'
import GameIcon from '@/assets/icons/categoryIcons/game-icon.webp'
import OtherIcon from '@/assets/icons/categoryIcons/other-icon.webp'
import SeriesIcon from '@/assets/icons/categoryIcons/series-icon.webp'

const defineCategoryIcon = (category: string) => {
  switch (category) {
    case 'Book':
      return BookIcon
    case 'Cartoon':
      return CartoonIcon
    case 'Film':
      return FilmIcon
    case 'Game':
      return GameIcon
    case 'Series':
      return SeriesIcon
    case 'Other':
      return OtherIcon
    default:
      return null
  }
}

export default defineCategoryIcon
