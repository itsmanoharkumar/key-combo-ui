// components/layout.js


import ApplicationHeader from '@/components/ApplicationHeader';
import { ReactNode } from 'react';

export default function Layout({children}: { children: ReactNode }) {
  return (
    <>
      <ApplicationHeader/>
      <main>{children}</main>
    </>
  );
}
