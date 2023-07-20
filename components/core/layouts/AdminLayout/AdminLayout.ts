import styled, { css } from 'styled-components';
import { Layout } from 'antd';

export const AdminLayoutWrap = styled(Layout)<{ $isCollapse: boolean }>`
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
    padding: 20px;

    margin-left: 80px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      margin-left: 0px;
    }

    ${({ $isCollapse }) =>
      !$isCollapse &&
      css`
        margin-left: 240px;
      `}

    .trigger {
      margin-right: auto;
      display: block;

      @media ${(props) => props.theme.breakpoints.smMax} {
        display: none;
      }
    }

    .trigger-drawer {
      margin-right: auto;
      display: none;

      @media ${(props) => props.theme.breakpoints.smMax} {
        display: block;
      }
    }
  }

  .ant-layout-sider {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    position: fixed;
    left: 0;
    height: 100vh;
    z-index: 99;

    @media ${(props) => props.theme.breakpoints.smMax} {
      display: none;
    }

    .ant-menu {
      background-color: ${(props) => props.theme.colors.backgroundColor};
      height: calc(100vh - 200px);
      padding-top: 20px;
      overflow-y: scroll;
      border: none;

      ::-webkit-scrollbar {
        width: 0px;
      }

      .ant-menu-item {
        margin: 0;
        border-radius: 0;
        width: 100%;
        height: unset;
        padding: 20px 0;
        color: ${(props) => props.theme.colors.other.text4};
        position: relative;

        &:hover {
          background-color: ${(props) => props.theme.colors.other.background4};
          color: ${(props) => props.theme.colors.primaryColor};
        }

        .ant-menu-item-icon {
          width: 24px;
          height: 24px;
        }

        .ant-menu-title-content {
          font-style: normal;
          color: ${(props) => props.color || props.theme.colors.other.text4};
          font-size: ${(props) => props.theme.fontSize.md};
          font-weight: ${(props) => props.theme.fontWeight.regular};
          line-height: 26px;

          &:hover {
            color: ${(props) => props.theme.colors.primaryColor};
          }
        }
      }

      .ant-menu-item-active {
        background-color: ${(props) => props.theme.colors.other.background4};
        color: ${(props) => props.color || props.theme.colors.primaryColor};
      }

      .ant-menu-item-selected {
        background-color: ${(props) => props.theme.colors.other.background4};
        position: relative;
        color: ${(props) => props.color || props.theme.colors.primaryColor};

        &::after {
          content: '';
          position: absolute;
          left: 0px;
          top: 0px;
          width: 8px;
          height: 100%;

          background: #600b76;
          border-radius: 20px;
          transition: all 0.4s;
        }

        .ant-menu-title-content {
          font-style: normal;
          color: ${(props) => props.color || props.theme.colors.primaryColor};
          font-size: ${(props) => props.theme.fontSize.md};
          font-weight: ${(props) => props.theme.fontWeight.bold};
          line-height: 26px;
        }
      }
    }

    .ant-menu-vertical {
      .ant-menu-item {
        display: flex;
        padding-left: 30px;

        .ant-menu-item-icon {
        }
      }
    }
  }

  .ant-layout-content {
    height: 100%;
    min-height: 100vh;
    padding: 32px 24px;
    background-color: ${(props) => props.theme.colors.other.background4};

    margin-left: 80px;

    @media ${(props) => props.theme.breakpoints.smMax} {
      margin-left: 0px;
    }

    ${({ $isCollapse }) =>
      !$isCollapse &&
      css`
        margin-left: 240px;
      `}
  }
`;

export const Logo = styled.div<{ $isCollapse: boolean }>`
  width: 100%;
  height: 80px;
  text-align: center;
  cursor: pointer;

  transition: all 0.5s;

  ${({ $isCollapse }) =>
    $isCollapse &&
    css`
      img {
        width: 80%;
        transition: all 0.5s;
      }
    `}
`;

export const LogoHeader = styled.div`
  width: 64px;
  height: 80px;
  text-align: center;
  cursor: pointer;
  display: none;

  @media ${(props) => props.theme.breakpoints.smMax} {
    display: block;
  }

  img {
    width: 80%;
    transition: all 0.5s;
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
    }
  }
`;

export const SectionCommunity = styled.div`
  margin: 28px 16px 10px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .info-wrap {
    display: flex;
    align-items: center;
    gap: 8px;

    .subtitle {
      color: ${(props) => props.theme.colors.primaryColor};
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 110px;
    }

    .avatar-wrap {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      overflow: hidden;
      position: relative;

      ::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 4px;
        border: 2px solid transparent;
        background: linear-gradient(220.88deg, #ff5454 -12.37%, #c15cff 108.09%)
          border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
      }

      img {
        width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }
  }

  .button-more {
    cursor: pointer;
  }
`;

export const SectionCommunityCollapse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 28px 16px 10px 16px;

  .avatar-wrap {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 4px;
      border: 2px solid transparent;
      background: linear-gradient(220.88deg, #ff5454 -12.37%, #c15cff 108.09%)
        border-box;
      mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    img {
      width: 100%;
      height: auto;
      vertical-align: middle;
      cursor: pointer;
    }
  }
`;

export const PopoverContent = styled.div`
  max-width: 200px;
  position: relative;

  .subtitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    color: ${(props) => props.theme.colors.primaryColor};
    width: 100%;
    padding: 10px 20px;
  }

  .action-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .action-item {
      display: flex;
      align-items: center;
      width: 100%;

      cursor: pointer;
      transition: all 0.5s ease 0s;
      border-radius: 8px;
      padding: 10px 12px;

      &:hover {
        background: rgb(238, 243, 254);
        transition: all 0.5s ease 0s;
        color: ${(props) => props.theme.colors.primaryColor};

        img {
          filter: invert(9%) sepia(68%) saturate(7420%) hue-rotate(287deg)
            brightness(75%) contrast(97%);
        }
      }

      img {
        cursor: pointer;
        transition: all 0.5;
        margin-right: 6px;
      }
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

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: #600b76;
      background: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.other.text5};
      transition: all 0.5s;
    `}
`;

export const DrawerContentWrap = styled.section`
  .ant-menu {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    height: calc(100vh - 200px);
    padding-top: 20px;
    overflow-y: scroll;
    border: none;

    ::-webkit-scrollbar {
      width: 0px;
    }

    .ant-menu-item {
      margin: 0;
      border-radius: 0;
      width: 100%;
      height: unset;
      padding: 20px 0;
      color: ${(props) => props.theme.colors.other.text4};
      position: relative;

      &:hover {
        background-color: ${(props) => props.theme.colors.other.background4};
        color: ${(props) => props.theme.colors.primaryColor};
      }

      .ant-menu-item-icon {
        width: 24px;
        height: 24px;
      }

      .ant-menu-title-content {
        font-style: normal;
        color: ${(props) => props.color || props.theme.colors.other.text4};
        font-size: ${(props) => props.theme.fontSize.md};
        font-weight: ${(props) => props.theme.fontWeight.regular};
        line-height: 26px;

        &:hover {
          color: ${(props) => props.theme.colors.primaryColor};
        }
      }
    }

    .ant-menu-item-active {
      background-color: ${(props) => props.theme.colors.other.background4};
      color: ${(props) => props.color || props.theme.colors.primaryColor};
    }

    .ant-menu-item-selected {
      background-color: ${(props) => props.theme.colors.other.background4};
      position: relative;
      color: ${(props) => props.color || props.theme.colors.primaryColor};

      &::after {
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 8px;
        height: 100%;

        background: #600b76;
        border-radius: 20px;
        transition: all 0.4s;
      }

      .ant-menu-title-content {
        font-style: normal;
        color: ${(props) => props.color || props.theme.colors.primaryColor};
        font-size: ${(props) => props.theme.fontSize.md};
        font-weight: ${(props) => props.theme.fontWeight.bold};
        line-height: 26px;
      }
    }
  }

  .ant-menu-vertical {
    .ant-menu-item {
      display: flex;
      padding-left: 30px;

      .ant-menu-item-icon {
      }
    }
  }

  .drawer-close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .drawer-logo {
    width: 100%;
    height: 80px;
    margin-top: 28px;
    text-align: center;
  }
`;
