import './globals.css';

export const metadata = {
  title: 'site8 - bhenning.com',
  description: 'tools & utilities - select a destination',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
