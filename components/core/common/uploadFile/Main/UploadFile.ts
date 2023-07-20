import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalUpload = styled(Modal)`
  .ant-tabs-tab-btn {
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 26px;
    color: ${(props) => props.theme.colors.other.text2};

    padding: 0 8px;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${(props) => props.theme.colors.primaryColor};

    position: relative;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
    }
  }

  .ant-tabs .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 8px;
  }

  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 12px;

    ::before {
      border-bottom: unset;
    }
  }

  .ant-tabs-ink-bar {
    width: 0px !important;
  }
`;
