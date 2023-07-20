import React from 'react';

import * as S from './InputPhone';

export interface InputPhonePropsStyles {
  className?: string;
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

interface InputPhoneProps extends InputPhonePropsStyles {
  onChange?: () => void;
  disabled?: boolean;
  countryCodeEditable?: boolean;
  required?: boolean;
  label?: string;
  id?: string;
  placeholder?: string;
  inputProps?: any;
  country?: string;
}

const InputPhone = ({
  onChange,
  className,
  disabled,
  countryCodeEditable,
  label,
  required,
  id = Math.random().toString(36).substring(2, 12),
  width = '100%',
  country = 'vi',
  ...props
}: InputPhoneProps) => {
  return (
    <S.InputPhoneWrapper className={className} id={id} style={{ width: width }}>
      {label && (
        <S.Label htmlFor={id}>
          {label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      <S.InputPhone
        disabled={disabled}
        country={country}
        countryCodeEditable={countryCodeEditable}
        onChange={onChange}
        {...props}
      />
    </S.InputPhoneWrapper>
  );
};

export default InputPhone;
