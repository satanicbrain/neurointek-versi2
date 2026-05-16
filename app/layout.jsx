import './globals.css';

export const metadata = {
  title: 'Pt. Neurosains Inti Technology ID',
  description: 'Website visual Pt. Neurosains Inti Technology ID berbasis full background image dan menu samping.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
