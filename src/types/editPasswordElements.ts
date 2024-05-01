export type EditPasswordElementsType = {
  placeholder: string
  name: 'email' | 'oldPassword' | 'newPassword' | 'confirmPassword'
}

export type EditPasswordType = {
  email: string
  oldPassword: string
  newPassword: string
  confirmPassword: string
}
