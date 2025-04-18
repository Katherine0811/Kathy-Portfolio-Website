import type { Metadata } from "next";
import { Press_Start_2P, Inter } from "next/font/google";
import "./globals.css";

const pixelFont = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
});

const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kathy Portfolio",
  description: "Welcome to my pixel art portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${pixelFont.className}`}>
        <div className="forest-background" />
        <header className="header fixed top-0 left-0 right-0 z-50">
          <nav className="container mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="header-title" data-text="Kathy Portfolio">Kathy Portfolio</h1>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 pt-32 pb-16">
          {children}
        </main>
        <footer className="footer">
          <div className="container mx-auto">
            <div className="footer-content flex flex-col items-center space-y-4">
              <p>© 2024 Kathy Portfolio. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://github.com/Katherine0811" className="nav-link">GitHub</a>
                <a href="https://www.linkedin.com/in/yan-jie-lee-073b72240/" className="nav-link">LinkedIn</a>
                <a href="mailto:katherine.lee0356@gmail.com" className="nav-link">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
