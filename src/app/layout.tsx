import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import "../styles/style.css";
import { MainLayout } from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Access Mate Australia",
  description: "Access Mate Australia is a platform that connects people with disabilities to support workers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
