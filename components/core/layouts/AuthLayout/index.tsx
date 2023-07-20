import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { routersAuth } from '@/settings/protected';

import { RootState } from '@/store';

import * as S from './AuthLayout';

type AdminLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function AdminLayout({
  title = 'Dnes',
  children,
}: AdminLayoutProps) {
  const router = useRouter();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // TODO: onboarding, event preview
    if (isAuth) {
      if (
        router.pathname !== '/on-boarding' &&
        router.pathname !== '/event/preview' &&
        !routersAuth?.includes(router.pathname)
      ) {
        const redirect: string =
          (router?.query?.redirect as string) || '/community/create';

        router.push(redirect);
      }
    } else {
      if (
        router.pathname === '/on-boarding' ||
        router.pathname === '/event/preview'
      ) {
        router.push('/auth/login');
      }
    }
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

      <S.AuthLayoutWrap>{children}</S.AuthLayoutWrap>
    </>
  );
}
