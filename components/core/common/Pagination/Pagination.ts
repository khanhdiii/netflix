import styled from 'styled-components';

import { Pagination } from 'antd';

export const PaginationCommon = styled(Pagination)`
  display: flex;
  justify-content: center;

  .ant-pagination-item {
    text-align: center;
    background: transparent;
    border: 1px solid ${(props) => props.theme.colors.other.text4} !important;
    border-radius: ${(props) => props.theme.radius.smallRadius} !important;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      font-weight: ${(props) => props.theme.fontWeight.bold} !important;
      color: ${(props) => props.theme.colors.other.text4};
    }

    &:hover {
      background: ${(props) => props.theme.colors.buttonGradient};
      border: none;

      a {
        color: ${(props) => props.theme.colors.other.text5} !important;
      }
    }
  }

  .ant-pagination-item-active {
    background: ${(props) => props.theme.colors.buttonGradient};
    border: none !important;

    a {
      color: ${(props) => props.theme.colors.other.text5} !important;
    }
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    background: none !important;
    border: none !important;
  }

  .ant-pagination-disabled,
  .ant-pagination-disabled:hover {
    background: none !important;
  }

  .anticon.anticon-double-right.ant-pagination-item-link-icon,
  .anticon.anticon-double-left.ant-pagination-item-link-icon {
    color: ${(props) => props.theme.colors.other.text4} !important;
  }

  .ant-select-selector {
    border: 1px solid ${(props) => props.theme.colors.other.text4} !important;
    box-shadow: none !important;

    .ant-select-selection-item {
      font-weight: ${(props) => props.theme.fontWeight.semiBold} !important;
      color: ${(props) => props.theme.colors.other.text4} !important;
    }
  }
`;
