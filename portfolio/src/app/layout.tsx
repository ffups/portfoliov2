import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/NavBar'

export const metadata: Metadata = {
  title: "Joseph Silex",
  description: "Joseph Silex Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>        
        <header> <Navbar /></header>
        {children}
        <footer> Footer</footer>
      </body>
    </html>
  );
}
