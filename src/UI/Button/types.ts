import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string | ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  icon?: StaticImageData;
  onClick?: () => void;
  isSmall?: boolean;
};

export type StyledButtonProps = {
  $variant: 'primary' | 'secondary';
  $width: string;
  $isSmall: boolean;
};
