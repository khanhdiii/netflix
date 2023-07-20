import React from 'react';

import * as S from './Select';

import Image from 'next/image';

import arrowIcon from '@/public/icons/common/arrow-down.svg';
import checked from '@/public/icons/common/checked.svg';

export interface SelectPropsStyles {
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

interface SelectProps extends SelectPropsStyles {
  onChange?: () => void;
  isMulti?: boolean;
  className?: string;
  disabled?: boolean;
  options?: Array<any>;
  placeholder?: string;
  label?: string;
  required?: boolean;
  id?: string;
  defaultValue?: string | string[] | number | number[];
  mode?: 'multiple' | 'tags';
  [key: string]: any;
}

const Select = ({
  mode,
  required = false,
  label,
  options,
  placeholder,
  className,
  id = Math.random().toString(36).substring(2, 12),
  defaultValue,
  disabled,
  width = '100%',
  height = '46px',
  ...props
}: SelectProps) => {
  return (
    <S.SelectWrapper className={className} style={{ width: width }}>
      {label && (
        <S.Label htmlFor={id}>
          {label} {required && <S.Required>(*)</S.Required>}
        </S.Label>
      )}

      <S.Selectbox
        id={id}
        height={height}
        mode={mode}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        menuItemSelectedIcon={<Image src={checked} alt="" />}
        suffixIcon={<Image src={arrowIcon} alt="" />}
        {...props}
      />
    </S.SelectWrapper>
  );
};

export default Select;
