import React, { useLayoutEffect } from 'react';
import { Layout, Avatar, Dropdown } from 'antd';
import Image from 'next/image';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import type { MenuProps } from 'antd';

import { RootState, AppDispatch } from '@/store';
import { actionLogout } from '@/store/slice/auth';
import { KEYS_FIELDS_FORM_SURVEY, OPTIONS_POLL } from '@/settings/constants';

import SelectLanguage from '../../common/SelectLanguage';

const { Header, Content } = Layout;

import * as S from './OtherLayout';

type AdminLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function AdminLayout({
  title = 'Dnes',
  children,
}: AdminLayoutProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuth, userInfo } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  const handleLogout = () => {
    dispatch(actionLogout());
    router.push('/auth/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  useLayoutEffect(() => {
    if (!isAuth) {
      router.push(`/auth/login`);
      // router.push(`/auth/login?redirect=${router.pathname}`);
    }

    return () => {
      if (router.pathname !== '/mission/create') {
        localStorage.removeItem(OPTIONS_POLL);
        localStorage.removeItem(KEYS_FIELDS_FORM_SURVEY);
      }
    };
  }, [isAuth, router]);

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

      <S.AdminLayoutWrap>
        <Layout className="site-layout">
          <Header>
            <S.Logo>
              <Image
                src="/icons/layout/logo.svg"
                alt="logo"
                width={112}
                height={80}
                priority
                onClick={() => router.push('/')}
              />
            </S.Logo>
            <S.HeaderRight>
              <SelectLanguage />
              <Image
                className="bell-icon"
                src="/icons/layout/bell.svg"
                alt="dropdown"
                width={24}
                height={24}
              />
              <Dropdown
                menu={{ items }}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
              >
                <div className="wrap-options">
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"></Avatar>
                  {userInfo?.firstName || userInfo?.email}
                  <Image
                    className="dropdown-icon"
                    src="/icons/layout/dropdown.svg"
                    alt="dropdown"
                    width={8}
                    height={4}
                  />
                </div>
              </Dropdown>
            </S.HeaderRight>
          </Header>
          <Content>{children}</Content>
        </Layout>
      </S.AdminLayoutWrap>
    </>
  );
}
