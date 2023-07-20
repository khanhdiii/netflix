import React from 'react';

import * as S from './Button';

export interface ButtonPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  isOutline?: boolean;
  width?: string;
  $iconBefore?: string;
}

interface ButtonProps extends ButtonPropsStyles {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?:
    | 'link'
    | 'text'
    | 'default'
    | 'ghost'
    | 'primary'
    | 'dashed'
    | undefined;
}

const Button = ({
  children,
  className,
  disabled,
  type,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <S.ButtonCommon
      loading={loading}
      disabled={disabled}
      className={className}
      type={type}
      {...props}
    >
      {children}
    </S.ButtonCommon>
  );
};

export default Button;
