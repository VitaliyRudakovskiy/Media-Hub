export type FormInput = {
  placeholder: string
  type: 'text' | 'password' | 'email'
  name: 'name' | 'secondName' | 'email' | 'password'
}

export type SignupFormType = {
  name: string
  secondName: string
  email: string
  password: string
}

export type LoginFormType = Pick<SignupFormType, 'email' | 'password'>

export type LoginFormInput = {
  placeholder: string
  type: 'text' | 'password'
  name: 'email' | 'password'
}

export type CreatePostFormType = {
  title: string
  tags: string
  category: string
}
