import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';
import useSubscription from '../hooks/useSubscription';
import Membership from '@/components/MemberShip';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase';

interface Customers {
  id: string;
  name: string;
}

function Account() {
  const { user, logOut } = useAuth();
  const [customers, setCustomers] = useState<Customers[]>([]); // Define the state hook for customers

  console.log(customers);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'customers'));
        const customersData: any = querySnapshot.docs.map((doc) => {
          const customerData = doc.data() as Customers;
          return { ...customerData, id: doc.id };
        });

        setCustomers(customersData);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);
  return (
    <div>
      <Head>
        <title>Account Settings - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">Member since</p>
          </div>
        </div>

        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2 font-medium"></div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
            Change plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logOut}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
}

export default Account;

export const getStaticProps: any = async () => {
  return {
    props: {
      products: [],
    },
  };
};
