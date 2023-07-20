import { Button } from 'antd';
import styled, { css } from 'styled-components';

import { ButtonPropsStyles } from '.';

export const ButtonCommon = styled(Button)<ButtonPropsStyles>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  cursor: pointer;
  border: 1px solid
    ${(props) => props?.borderColor || props?.theme?.colors?.primaryColor};
  color: ${(props) => props?.color || props?.theme?.colors?.primaryColor};
  border-radius: ${({ theme }) => theme?.radius?.largeRadius};
  font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.bold};
  line-height: 1.6;
  transition: all 0.3s;
  height: auto;

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme?.colors?.buttonActive};
    box-shadow: 0 0 5px 0 ${({ theme }) => theme?.colors?.primaryColor};
    color: ${(props) => props?.color || props?.theme?.colors?.primaryColor};
  }

  &:active,
  &.active {
    border-color: ${({ theme }) => theme?.colors?.buttonActive};
  }

  &:disabled {
    color: ${({ theme }) => theme?.colors?.textColor};
    border-color: ${({ theme }) => theme?.colors?.buttonDisable};
  }

  &.ant-btn-link {
    padding: 0;
    border: none;
    text-decoration: underline;
    &:not(:disabled):hover {
      border-color: none;
      box-shadow: none;
    }
  }

  &.ant-btn-ghost {
    background-color: ${({ theme }) => theme?.colors?.other?.background1};
    border: 1px solid ${({ theme }) => theme?.colors?.other?.background1};
    padding: 8px 12px;
    gap: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    align-items: center;
    height: 42px;
    color: ${({ theme }) => theme?.colors?.other?.text1};

    &:not(:disabled):hover {
      background: transparent;
      color: ${({ theme }) => theme?.colors?.other?.text1};
      border: 1px solid ${({ theme }) => theme?.colors?.primaryColor};
    }
  }

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  &.ant-btn-primary {
    border: none;
    box-shadow: none;
    color: #fff;
    background-color: ${({ theme }) => theme?.colors?.buttonActive} !important;
  }

  &.ant-btn-primary:hover {
    color: #fff;
  }

  &.ant-btn-primary:active,
  &.ant-btn-primary.active {
    background: ${({ theme }) => theme?.colors?.buttonActive};
  }

  &.ant-btn-primary:disabled {
    color: #fff;
    background: ${({ theme }) => theme?.colors?.buttonDisable} !important;
  }

  &.ant-btn-default {
    position: relative;
    border: none;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: ${({ theme }) => theme?.radius?.normalRadius};
      border: 1px solid transparent;
      background: ${(props) =>
          props.backgroundColor || props.theme?.colors?.buttonGradient}
        border-box;
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    span {
      background: ${(props) =>
        props.backgroundColor || props.theme?.colors?.buttonGradient};
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      ${({ $iconBefore }) =>
        $iconBefore &&
        css`
          &::before {
            content: '${$iconBefore}';
            font-size: 130%;
            margin-right: 8px;
            line-height: 100%;
          }
        `}
    }

    .anticon {
      color: inherit;
    }
  }
`;
