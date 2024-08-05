import Head from 'next/head';
import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </Head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
