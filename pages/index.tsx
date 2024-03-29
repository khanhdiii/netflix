import { useRecoilValue } from 'recoil';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Row from '@/components/Row';
import useAuth from '@/hooks/useAuth';
import { Movie } from '@/typings';
import requests from '@/utils/requests';
import Head from 'next/head';
import Modal from '@/components/Modal';
import { modalState } from '@/atoms/modalAtom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import Plans from '@/components/Plans';
import { message } from 'antd';

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  prices?: any[];
  metadata?: {
    videoQuality?: string;
    resolution?: string;
    portability?: string;
  };
  selectedPlan?: any;
}

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
}: Props) => {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const subscription = true;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData: any = querySnapshot.docs?.map((doc) => {
          const productData = doc.data() as ProductProps;
          productData.prices = [];
          return { ...productData, id: doc.id };
        });

        const priceFetchPromises = productsData?.map(
          async (productData: any) => {
            const pricesSnapshot = await getDocs(
              collection(db, `products/${productData.id}/prices`),
            );
            const prices = pricesSnapshot.docs?.map((priceDoc) =>
              priceDoc.data(),
            );
            productData.prices = prices;
          },
        );

        await Promise.all(priceFetchPromises);

        setProducts(productsData);
      } catch (error) {
        message.error('Fetch data is failed');
      }
    };

    fetchProducts();
  }, []);

  if (!subscription) return <Plans products={products} />;
  if (loading) return null;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
