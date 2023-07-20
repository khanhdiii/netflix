import styled, { css } from 'styled-components';

import { Select } from 'antd';

import { SelectPropsStyles } from '.';

export const SelectWrapper = styled.div`
  margin-bottom: 8px;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme?.colors?.other?.red1};
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme?.fontSize?.base};
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  line-height: 1.7;
  margin-bottom: 6px;
`;

export const OptionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Selectbox = styled(Select)<SelectPropsStyles>`
  &.ant-select {
    display: block;
    font-size: ${(props) => props?.fontSize || props?.theme?.fontSize?.base};
    font-weight: ${(props) =>
      props?.fontWeight || props?.theme?.fontWeight?.regular};
    width: ${(props) => props?.width || '100%'};
    height: ${(props) => props?.height || '46px'};

    .ant-select-selector {
      padding: 8px 15px;
      border: 1px solid
        ${(props) =>
          props?.borderColor || props?.theme?.colors?.other?.background1};
      color: ${(props) => props?.color || props?.theme?.colors?.textColor};
      background: ${(props) => props.backgroundColor || '#ffffff'};
      border-radius: ${({ theme }) => theme?.radius?.normalRadius};
      height: auto;

      .ant-select-selection-item {
        font-size: ${(props) =>
          props?.fontSize || props?.theme?.fontSize?.base};
        font-weight: ${(props) =>
          props?.fontWeight || props?.theme?.fontWeight?.regular};
      }

      .ant-select-arrow {
        inset-inline-end: 15px;
      }

      ${(props) =>
        props.padding &&
        css`
          padding: ${props.padding};
        `}
    }

    &:not(.ant-select-disabled):hover,
    &:not(.ant-select-disabled).ant-select-open,
    &:not(.ant-select-disabled).ant-select-focused {
      .ant-select-selector {
        box-shadow: none !important;
        border-color: ${({ theme }) => theme?.colors?.primaryColor} !important;
      }
    }
  }
`;
