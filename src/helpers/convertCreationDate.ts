import { DateTimeFormatOptions } from 'next-intl'

const convertCreationDate = (dateNumber: number) => {
  const convertedDate = new Date(dateNumber)
  const now = new Date()

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  const isToday = now.toDateString() === convertedDate.toDateString()
  const isYesterday = yesterday.toDateString() === convertedDate.toDateString()

  const timeOptions: DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' }
  const dateOptions: DateTimeFormatOptions = { day: 'numeric', month: 'long' }
  const time = convertedDate.toLocaleString('ru-RU', timeOptions)

  if (isToday) return `Сегодня в ${time}`
  if (isYesterday) return `Вчера в ${time}`
  return `${convertedDate.toLocaleString('ru-RU', dateOptions)} в ${time}`
}

export default convertCreationDate
