import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AppProvider } from "@/context/app_context";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zolak text generator chatbot",
  description: "Using Open AI api to make a text generation chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
