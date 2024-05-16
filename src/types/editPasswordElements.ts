export type EditPasswordElementsType = {
  placeholder: string
  label: string
  name: 'email' | 'oldPassword' | 'newPassword' | 'confirmPassword'
}

export type EditPasswordType = {
  email: string
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
