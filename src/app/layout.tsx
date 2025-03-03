import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
