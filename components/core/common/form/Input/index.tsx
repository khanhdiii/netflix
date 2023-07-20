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
  rows?: number;
}

interface InputProps extends InputPropsStyles {
  className?: string;
  type?: string;
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
  type,
  label,
  disabled,
  placeholder,
  prefix,
  suffix,
  required,
  width = '100%',
  height = '44px',
  rows,
  id = Math.random().toString(36).substring(2, 12),
  ...props
}: InputProps) => {
  const renderInput = (inputType?: string) => {
    switch (inputType) {
      case 'textarea':
        return (
          <S.TextareaCommon
            id={id}
            rows={rows}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
        );
      case 'password':
        return (
          <S.InputPasswordCommon
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            style={{ width: width, height: height }}
            {...props}
          />
        );
      case 'number':
        return (
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
        );
      default:
        return (
          <S.InputCommon
            type={inputType}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            style={{ width: width, height: height }}
            {...props}
          />
        );
    }
  };
  return (
    <S.InputWrapper className={className} style={{ width: width }}>
      {label && (
        <S.Label htmlFor={id}>
          {label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      {renderInput(type)}
    </S.InputWrapper>
  );
};

export default Input;
