import styled from 'styled-components';

import { Layout } from 'antd';

import { SidebarItemProps } from '@/models/entities/workspace';

export const WorkspaceLayout = styled(Layout)`
  .ant-layout-header {
    background-color: ${(props) => props?.theme?.colors?.secondaryColor};
    position: sticky;
    top: 0;
    height: 80px;
    overflow: hidden;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    @media ${(props) => props?.theme?.breakpoints?.smMax} {
      padding: 10px 16px;
    }
  }

  .ant-layout-content {
    overflow: hidden;
    height: calc(100vh - 80px);
    overflow-y: auto;
    padding: 32px 24px;
    background-color: ${(props) => props?.theme?.colors?.backgroundColor};

    @media ${(props) => props?.theme?.breakpoints?.smMax} {
      padding: 32px 16px;
    }
  }

  .ant-layout-sider {
    background: ${(props) => props?.theme?.colors?.backgroundColor};
    padding: 40px 20px 0px 36px;
    width: 40% !important;
    max-width: 300px !important;
    flex: 0 0 100% !important;
    height: calc(100vh - 80px);
    box-sizing: border-box;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${(props) => props?.theme?.colors?.secondaryColor};
      border: 1px solid ${(props) => props?.theme?.colors?.borderColor};
    }
  }

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const NavBarTitle = styled.h1`
  font-size: ${(props) => props?.theme?.fontSize.xxxl};
  color: ${(props) => props?.theme?.colors?.textColor};
  font-weight: 300;
`;

export const SideBarItem = styled.div<SidebarItemProps>`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid ${(props) => props?.theme?.colors?.borderColor};
  box-shadow: ${(props) =>
    props.selected ? props.theme.shadow.smallShadow : 'none'};
  border-radius: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: start;
  padding: 16px 10px;
  cursor: pointer;
  font-weight: ${(props) => {
    return props.status === 'visited'
      ? props?.theme?.fontWeight?.medium
      : props?.theme?.fontWeight?.light;
  }};

  .state {
    background-color: ${(props) => {
      switch (props.status) {
        case 'visited':
        case 'done': {
          return props?.theme?.colors?.primaryColor;
        }
        case 'unvisited': {
          return props?.theme?.colors?.textSecondaryColor;
        }
        default: {
          return '#FCD54D';
        }
      }
    }};
  }
`;

export const StateChapter = styled.div`
  display: flex;
  flex-direction: column;
  width: 26px;
  height: 26px;
  border-radius: 100%;

  color: ${(props) => props?.theme?.colors?.secondaryColor};
  justify-content: center;
  align-items: center;
`;

export const SideBarItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemGroupTitle = styled.p`
  font-size: ${(props) => props?.theme?.fontSize?.md};
  font-weight: ${(props) => props?.theme?.fontWeight?.bold};
`;

export const SideBarEndGroup = styled.div`
  margin-bottom: 9px;
`;
