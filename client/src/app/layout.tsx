import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
// import { PathnameProvider } from "../../contexts/PathnameContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DegenKong",
  description: "DegenKong Solana NFT Staking NFT Collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
