import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qr Payments App",
  description: "App is a simple QR code payment system i.e person to merchant payment system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
