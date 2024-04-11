export type ConfirmFormProps = {
  title?: string;
  subtitle?: string;
  confirmText?: string;
  cancelText?: string;
  closeModal: () => void;
  onConfirm: () => void;
};
