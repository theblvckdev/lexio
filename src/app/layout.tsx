import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { AppProvider } from "@/context/app_context";

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
        <body className={inter.className}>{children}</body>
      </html>
    </AppProvider>
  );
}
