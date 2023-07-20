import React from 'react';

import * as S from './Datepicker';

export interface DatepickerPropsStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
}

interface DatepickerProps extends DatepickerPropsStyles {
  onChange?: () => void;
  className?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  prevIcon?: JSX.Element | string;
  suffixIcon?: JSX.Element | string;
  label?: string;
  required?: boolean;
  id?: string;
  [key: string]: any;
}

const Datepicker = ({
  className,
  label,
  type,
  disabled,
  placeholder,
  required,
  width = '100%',
  id = Math.random().toString(36).substring(2, 12),
  ...props
}: DatepickerProps) => {
  return (
    <S.DatepickerWrapper className={className} style={{ width: width }}>
      {label && (
        <S.Label htmlFor={id}>
          {label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}
      {type === 'range' ? (
        <S.DatepickerRangeCommon
          id={id}
          disabled={disabled}
          style={{ width: width }}
          {...props}
        />
      ) : (
        <S.DatepickerCommon
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          style={{ width: width }}
          {...props}
        />
      )}
    </S.DatepickerWrapper>
  );
};

export default Datepicker;
