export type ConfirmFormProps = {
  title?: string
  subtitle?: string
  confirmText?: string
  cancelText?: string
  theme: 'dark' | 'light'
  notificationText?: string
  closeModal: () => void
  onConfirm: () => void
}
