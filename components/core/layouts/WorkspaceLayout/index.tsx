import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { Layout } from 'antd';

import { sideBarData } from '@/models/mock/workspace';
import { SidebarItemData, Status } from '@/models/entities/workspace';

import * as S from './workspaceLayout';

type WorkspaceLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function WorkspaceLayout({
  title = 'DNES',
  children,
}: WorkspaceLayoutProps) {
  const { Content, Sider, Header } = Layout;

  const router = useRouter();
  const { t } = useTranslation('layout');

  const [selectedItem, setSelectedItems] = useState<SidebarItemData | null>();

  const onItemSelected = (item: SidebarItemData) => {
    setSelectedItems({ ...item });
    router.push(item?.href || '#');
  };

  const getStatus = (item: SidebarItemData): Status => {
    if (!item) return 'unvisited';
    return selectedItem?.id === item.id
      ? 'visited'
      : item?.status || 'unvisited';
  };

  const renderSideBarItems = () =>
    sideBarData?.map((sideBarItemGroup, index) => (
      <S.SideBarItemGroup key={index}>
        <S.ItemGroupTitle>{sideBarItemGroup?.title || ''}</S.ItemGroupTitle>
        {sideBarItemGroup?.children?.map((item, index) => (
          <S.SideBarItem
            status={getStatus(item)}
            key={item?.id || index}
            onClick={() => onItemSelected(item)}
            selected={selectedItem?.id === item?.id}
          >
            <S.StateChapter className="state">
              {item?.order || 0}
            </S.StateChapter>
            {item?.title || ''}
          </S.SideBarItem>
        ))}
        <S.SideBarEndGroup />
      </S.SideBarItemGroup>
    ));

  return (
    <>
      <Head>
        <title>{title ?? ''}</title>
        <meta name="description" content="Dnes" />
        <meta name="keywords" content="Dnes" />
      </Head>
      <S.WorkspaceLayout>
        <Header>
          <S.NavBarTitle>{t('summary')}</S.NavBarTitle>
        </Header>
        <Layout hasSider>
          <Sider>{renderSideBarItems()}</Sider>
          <Content>{children}</Content>
        </Layout>
      </S.WorkspaceLayout>
    </>
  );
}
