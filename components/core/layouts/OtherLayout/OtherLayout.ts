import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const AdminLayoutWrap = styled(Layout)`
  .ant-layout-header {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    position: sticky;
    top: 0;
    height: 80px;
    overflow: hidden;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    width: 100%;

    @media ${(props) => props.theme.breakpoints.smMax} {
      padding: 10px 16px;
    }
  }

  .ant-layout-content {
    overflow: hidden;
    min-height: 100vh;
    padding: 32px 24px;
    background-color: ${(props) => props.theme.colors.other.background4};

    @media ${(props) => props.theme.breakpoints.smMax} {
      padding: 32px 16px;
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
  cursor: pointer;
  flex-basis: 20%;
  display: flex;
  justify-content: flex-start;

  img {
    @media ${(props) => props.theme.breakpoints.smMax} {
      width: 90%;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .bell-icon {
    margin: 0 16px;
    cursor: pointer;
  }

  .wrap-options {
    cursor: pointer;
    border: ${(props) => `2px solid ${props.theme.colors.primaryColor}`};
    border-radius: 24px;
    height: 40px;
    overflow: hidden;
    padding: 4px;
    padding-left: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;

    color: ${(props) => props.color || props.theme.colors.other.text4};
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 24px;

    .ant-avatar {
      margin-right: 4px;

      img {
        object-fit: cover;
      }
    }

    .dropdown-icon {
      width: 16px;
      height: 8px;
      margin-left: 22px;
      margin-right: 10px;

      @media ${(props) => props.theme.breakpoints.smMax} {
        margin-left: 12px;
        margin-right: 5px;
      }
    }

    @media ${(props) => props.theme.breakpoints.smMax} {
      height: 36px;
    }
  }
`;

export const SwitchLanguage = styled.div`
  background: #e2e1e6;
  height: 40px;
  border-radius: 20px;
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.smMax} {
    height: 30px;
  }
`;

export const ActiveLanguage = styled.span<{ $isActive?: boolean }>`
  width: 45px;
  height: 34px;
  padding: 0px 10px;
  cursor: pointer;

  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;

  color: ${(props) => props.color || props.theme.colors.other.text4};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 24px;

  text-align: center;
  text-transform: capitalize;

  transition: all 0.5s;

  @media ${(props) => props.theme.breakpoints.smMax} {
    width: 35px;
    height: 24px;
    font-size: ${(props) => props.theme.fontSize.sm};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: #600b76;
      background: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.other.text5};
      transition: all 0.5s;
    `}
`;
