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
          data-app-id={process.env.PX_APP_ID}
          src={`//client.px-cloud.net/${process.env.PX_APP_ID}/main.min.js`}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
