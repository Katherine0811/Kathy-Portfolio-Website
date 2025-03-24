import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kathy's Portfolio",
  description: "A pixel art themed portfolio showcasing IT expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8">
            <nav className="flex justify-between items-center pixel-border bg-white p-4">
              <h1 className="text-2xl font-bold pixel-font">Kathy&apos;s Portfolio</h1>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-8 pixel-border bg-white p-4 text-center">
            <p className="pixel-font text-sm">© 2024 Kathy&apos;s Portfolio. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
