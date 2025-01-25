import "./globals.css";
import Link from "next/link";
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
