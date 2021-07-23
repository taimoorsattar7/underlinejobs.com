import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// import { Header } from '@components/header/Header';
import {Header} from "@components/header/Header"
import Footer from '@components/footer/Footer';

import { useCurrentUser } from '@hooks/index';

export default function Layout({ children }: any) {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null);
  };
  return (
    <>
      <Header />


      <main>{children}</main>
      <Footer />
    </>
  );
};
