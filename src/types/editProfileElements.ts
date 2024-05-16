export type EditProfileElementsType = {
  placeholder: string
  label: string
  name: 'name' | 'secondName' | 'description' | 'favourites'
}

export type EditProfileType = {
  name: string
  secondName: string
  description: string
}
