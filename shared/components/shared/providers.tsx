'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
      <NextTopLoader />
    </>
  );
};
