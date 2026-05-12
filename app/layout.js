import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'site8 - bhenning.com',
  description: 'tools & utilities - select a destination',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="px-script"
          data-app-id="PXjJ0cYtn9"
          src="//client.px-cloud.net/PXjJ0cYtn9/main.min.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
