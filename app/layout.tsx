import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/main-header/main-header';

export const metadata: Metadata = {
  title: 'Shared',
  description: "Let's share what you love to eat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
