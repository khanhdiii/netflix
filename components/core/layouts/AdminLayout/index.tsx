import React from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

const { Content } = Layout;

import * as S from './AdminLayout';

type AdminLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function AdminLayout({
  title = 'Dnes',
  children,
}: AdminLayoutProps) {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  // const handleLogout = () => {
  //   router.push('/auth/login');
  //   dispatch(actionLogout());
  // };

  if (!isAuth) {
    // return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Dnes" />
        <meta name="keywords" content="Dnes" />

        {/* <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={`${ASSETS_URL}/${image}`} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${ASSETS_URL}/${image}`} />

        <meta name="twitter:card" content={`${ASSETS_URL}/${image}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${ASSETS_URL}/${image}`}></meta> */}
      </Head>

      <S.AdminLayoutWrap $isCollapse>
        <Layout className="site-layout">
          <Content>{children}</Content>
        </Layout>
      </S.AdminLayoutWrap>
    </>
  );
}
