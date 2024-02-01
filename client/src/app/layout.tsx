import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import ButtonSocials from "../components/buttons/ButtonSocials.tsx";
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
        <div className="page_container">
          <Navbar />
          <div className="socials_container">
            <ButtonSocials />
          </div>
          {children}
        </div>
        <div className="page_error_size">Go on a bigger screen.</div>
      </body>
    </html>
  );
}
