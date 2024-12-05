import type { Metadata } from 'next';
import NavBar from './components/NavBar';

export const metadata: Metadata = {
  title: 'Vite App',
  description: 'Vite App is a...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
