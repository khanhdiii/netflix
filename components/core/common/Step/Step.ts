import styled from 'styled-components';
import { Steps as StepsAnt } from 'antd';

export const Steps = styled(StepsAnt)`
  .custom-step .ant-steps-item:not(:last-child)::after {
    /* TODO */
  }

  p.subtitle {
    color: ${(props) => props?.theme?.colors?.textColor};
  }

  @media ${(props) => props.theme.breakpoints.mdMax} {
    .ant-steps-item-content {
      display: none !important;
    }

    .ant-steps-item-icon {
      margin-inline-start: 0px !important;
    }

    .ant-steps-item-tail {
      margin-inline-start: 12px !important;
    }
  }

  .ant-steps-item-title {
    p.title-step {
      color: red;
    }
  }

  .ant-steps-item-tail::after {
    height: 4px;
  }

  .ant-steps-item {
    .ant-steps-item-tail::after {
      background: #e2e1e6;
    }

    .ant-steps-item-icon {
      background: #e2e1e6;
      border: none;

      span {
        font-weight: 700;
        color: #b9b5c2 !important;
      }
    }
  }

  .ant-steps-item-finish {
    .ant-steps-item-tail::after {
      background-color: #07d95a !important;
    }

    .ant-steps-item-icon {
      background: #07d95a;
      border: none;

      svg {
        fill: #fcfcfd;
      }
    }
  }

  .ant-steps-item-active {
    .ant-steps-item-tail::after {
      width: 50%;
      background: linear-gradient(
        97.71deg,
        #d469c9 13.18%,
        #a040cc 42.81%,
        #7f26cd 76.14%,
        #6a15ce 97.53%
      ) !important;
    }

    .ant-steps-item-tail::before {
      content: ' ';
      background-color: #e2e1e6;
      position: absolute;
      width: 40%;
      height: 4px;
      right: 12%;
    }

    .ant-steps-item-icon {
      border: none;
      background: ${(props) => props.theme?.colors?.buttonGradient};

      span {
        font-weight: 700;
        color: #fcfcfd !important;
      }
    }
  }
`;
