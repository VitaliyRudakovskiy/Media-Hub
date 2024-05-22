export type StarRatingType = {
  label: string
  starValue?: number
  setStarValue: (rating?: number) => void
}
