"use client";

import { ReactNode } from "react";
import AppContext from "./AppContext";
import { ThemeProvider } from "next-themes";

type Props = { children: ReactNode };

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <AppContext>{children}</AppContext>
    </ThemeProvider>
  );
}
