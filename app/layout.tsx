import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Hello Next.js Learning</h1>
        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="product">Products</a></li>
          </ul>
        </div>
        {children}</body>
    </html>
  );
}