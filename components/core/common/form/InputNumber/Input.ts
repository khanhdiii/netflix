import styled, { css } from 'styled-components';

import { Input, InputNumber } from 'antd';

import { InputPropsStyles } from '.';

export const InputWrapper = styled.div<InputPropsStyles>`
  margin-bottom: 8px;
`;

export const Label = styled.label<InputPropsStyles>`
  display: block;
  font-size: ${({ theme }) => theme?.fontSize?.base};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  line-height: 1.7;
  margin-bottom: 6px;
`;

export const TextareaCommon = styled(Input.TextArea)<InputPropsStyles>`
  &.ant-input-affix-wrapper,
  &.ant-input {
    padding: 10px 15px;
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
    font-weight: ${(props) =>
      props?.fontWeight || props?.theme?.fontWeight?.regular};
    line-height: 1.7;
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
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `}

  .ant-input-prefix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-input-suffix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-left: 9px;
      font-size: 14px;
    }

    &.ant-input-affix-wrapper-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }

      .ant-input-suffix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.red1} !important;
      }
    }
  }
`;

export const InputNumberCommon = styled(InputNumber)<InputPropsStyles>`
  &.ant-input-number {
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    height: auto;
    width: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-number-focused {
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
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

  .ant-input-number-input {
      padding: 10px 25px 10px 15px;
      min-width: 100px;
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
      font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
      font-weight: ${(props) =>
        props?.fontWeight || props?.theme?.fontWeight?.regular};
      line-height: 1.7;
      height: auto;

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    .ant-input-number-prefix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-input-number-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }
    }
  }
  &.ant-input-number-affix-wrapper {
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    height: auto;
    width: auto;

    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &.ant-input-number-affix-wrapper-focused {
      box-shadow: none;
      border: 1px solid ${(props) => props?.theme?.colors?.primaryColor};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    }

    &:not(:disabled):hover .ant-input-number,
    &:not(:disabled):focus .ant-input-number,
    &.ant-input-number-affix-wrapper-focused .ant-input-number {
      border: none;
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
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    .ant-input-number-input {
      padding: 10px 25px 10px 0;
      min-width: 100px;
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
      font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
      font-weight: ${(props) =>
        props?.fontWeight || props?.theme?.fontWeight?.regular};
      line-height: 1.7;
      height: auto;

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    .ant-input-number-prefix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    &.ant-input-number-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-number-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }
    }
  }
`;

export const InputPasswordCommon = styled(Input.Password)<InputPropsStyles>`
  &.ant-input-affix-wrapper {
    padding: 10px 15px;
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
    font-weight: ${(props) =>
      props?.fontWeight || props?.theme?.fontWeight?.regular};
    line-height: 1.7;
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
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `}

  .ant-input-prefix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
    }

    .ant-input-suffix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-left: 9px;
      font-size: 14px;
    }

    &.ant-input-affix-wrapper-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }

      .ant-input-suffix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.red1} !important;
      }
    }
  }
`;

export const InputCommon = styled(Input)<InputPropsStyles>`
  &.ant-input-affix-wrapper,
  &.ant-input {
    padding: 10px 15px;
    border: 1px solid
      ${(props) =>
        props?.borderColor || props?.theme?.colors?.other?.background1};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
    font-weight: ${(props) =>
      props?.fontWeight || props?.theme?.fontWeight?.regular};
    line-height: 1.7;
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
      `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${props.margin};
      `}

    ${(props) =>
      props.padding &&
      css`
        padding: ${props.padding};
      `}

    .ant-input-prefix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-right: 9px;
      font-size: 16px;
      line-height: 1.2;
    }

    .ant-input-suffix {
      color: ${({ theme }) => theme?.colors?.other?.grayDark};
      margin-left: 9px;
      font-size: 14px;
      line-height: 1.2;
    }

    .ant-input {
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    }

    &.ant-input-affix-wrapper-status-error {
      border-color: ${({ theme }) => theme?.colors?.other?.red2} !important;

      .ant-input-prefix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.grayDark} !important;
      }

      .ant-input-suffix .anticon {
        color: ${({ theme }) => theme?.colors?.other?.red1} !important;
      }
    }
  }

  &.ant-input-group-wrapper {
    border-radius: ${({ theme }) => theme?.radius?.normalRadius};
    background: ${(props) => props.backgroundColor || '#ffffff'};
    color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
    font-weight: ${(props) =>
      props?.fontWeight || props?.theme?.fontWeight?.regular};
    line-height: 1.6;

    .ant-input-group-addon {
      padding: 10px 15px;
      background: transparent;
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
      border: 1px solid
        ${(props) =>
          props?.borderColor || props?.theme?.colors?.other?.background1};
      border-right: none;
      height: ${(props) => props?.height || '46px'};

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    .ant-input {
      padding: 10px 15px;
      background: transparent;
      border: 1px solid
        ${(props) =>
          props?.borderColor || props?.theme?.colors?.other?.background1};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
      height: ${(props) => props?.height || '46px'};

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    &:not(:disabled):hover .ant-input,
    &:not(:disabled) .ant-input:focus {
      box-shadow: none;
      border: 1px solid ${(props) => props?.theme?.colors?.primaryColor};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
    }

    &:disabled {
      color: ${({ theme }) => theme?.colors?.textColor};
      background: ${({ theme }) => theme?.colors?.other?.background2};
      color: ${({ theme }) => theme?.colors?.other?.text2};
    }
  }
`;

export const Required = styled.span`
  color: ${({ theme }) => theme?.colors?.other?.red1};
`;
