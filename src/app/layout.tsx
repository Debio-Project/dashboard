import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import localFont from "next/font/local";

const neueHass = localFont({
  src: "../../public/fonts/NeueHaasDisplayMediu.woff2",
  variable: "--font-neueHass",
  display: "swap",
});

import "./globals.css";
import AppWalletProvider from "@/providers/wallet.provider";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeBio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${neueHass.variable}`}>
        <AppWalletProvider>
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
