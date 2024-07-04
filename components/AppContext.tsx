"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const AppContext = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppContext;
