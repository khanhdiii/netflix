import styled, { css } from 'styled-components';

import PhoneInput from 'react-phone-input-2';

import { InputPhonePropsStyles } from '.';

export const InputPhoneWrapper = styled.div<InputPhonePropsStyles>`
  margin-bottom: 8px;
`;

export const Label = styled.label<InputPhonePropsStyles>`
  display: block;
  font-size: ${({ theme }) => theme?.fontSize?.base};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  line-height: 1.7;
  margin-bottom: 6px;
`;

export const InputPhone = styled(PhoneInput)<InputPhonePropsStyles>`
  .form-control {
    width: 100%;
    padding: 10px 15px;
    padding-left: 50px !important;
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
    font-weight: ${(props) =>
      props.fontWeight || props.theme.fontWeight.regular};
    line-height: 1.6;
    height: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-affix-wrapper-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props?.theme?.colors?.primaryColor};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    }

    &:disabled {
      color: ${({ theme }) => theme?.colors?.textColor};
      background: ${({ theme }) => theme?.colors?.other?.background2};
      color: ${({ theme }) => theme?.colors?.other?.text2};
    }

    ${(props) =>
      props.width &&
      css`
        max-width: ${props.width};
        width: ${props.width};
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}
  }

  .flag-dropdown {
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    border: none;
    background: transparent !important;
    magin: 1px;
    .selected-flag {
      background: transparent !important;
      padding-left: 14px;
    }
  }
`;

export const Required = styled.span`
  color: ${({ theme }) => theme?.colors?.other?.red1};
`;
