import React from 'react';

import * as S from './Input';

export interface InputPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}

interface InputProps extends InputPropsStyles {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  label?: string;
  required?: boolean;
  id?: string;
  [key: string]: any;
}

const Input = ({
  className,
  label,
  disabled,
  placeholder,
  prefix,
  suffix,
  required,
  width = '100%',
  height = '46px',
  id = Math.random().toString(36).substring(2, 12),
  ...props
}: InputProps) => {
  return (
    <S.InputWrapper className={className} style={{ width: width }}>
      {label && (
        <S.Label htmlFor={id}>
          {label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      <S.InputCommon
        type="number"
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        prefix={prefix}
        suffix={suffix}
        style={{ width: width, height: height }}
        {...props}
      />
    </S.InputWrapper>
  );
};

export default Input;
