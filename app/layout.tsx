import AppContext from "@/components/AppContext";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Pizza",
  description: "Basic landing page about pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
          <AppContext>
            <Header />

            {children}

            <footer className="mt-16 border-t p-8 text-center text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved
            </footer>
          </AppContext>
        </main>
      </body>
    </html>
  );
}
