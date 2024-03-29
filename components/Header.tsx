import React, { useEffect, useState } from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import BasicMenu from './BasicMenu';
import Link from 'next/link';
import { message } from 'antd';
import useAuth from '@/hooks/useAuth';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const rememberedUserData = localStorage.getItem('rememberedUser');
    if (rememberedUserData) {
      try {
        JSON.parse(rememberedUserData);
        // Implement authentication logic using parsedData
      } catch (error) {
        message.error('Error parsing user data:');
      }
    }
  }, []);

  return (
    <header className={`${isScrolled && 'bg-slate-900'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer "
          alt=""
        />

        <BasicMenu />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className=" hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline:"></p>
        <BellIcon className="w-6 h-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="account"
            className="cursor-pointer rounded"
          />
        </Link>
        <Link href="/login">
          <button className="text-lg font-semibold" onClick={logOut}>
            Logout
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
