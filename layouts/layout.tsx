// components/layout.js

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {/*<ApplicationHeader/>*/}
      {/*<main>{children}</main>*/}
      {children}
    </>
  );
}
