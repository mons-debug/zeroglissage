import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://zero-glissage.vercel.app'),
  title: 'Zero Glissage - حل مضاد للانزلاق | الحماية الكاملة لعائلتك',
  description: 'تقنية مبتكرة لحماية عائلتك من مخاطر الانزلاق. شفاف 100%، بدون تكسير، آمن تماماً. خدمة مهنية في جميع أنحاء المغرب.',
  keywords: 'مضاد للانزلاق، حماية الأرضيات، أمان المنزل، Zero Glissage، المغرب، تقنية ألمانية',
  authors: [{ name: 'Zero Glissage' }],
  icons: {
    icon: '/gliisagelogo-06.png',
    shortcut: '/gliisagelogo-06.png',
    apple: '/gliisagelogo-06.png',
  },
  openGraph: {
    title: 'Zero Glissage - حل مضاد للانزلاق',
    description: 'تقنية مبتكرة لحماية عائلتك من مخاطر الانزلاق',
    url: 'https://zero-glissage.vercel.app',
    siteName: 'Zero Glissage',
    locale: 'ar_MA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Glissage - حل مضاد للانزلاق',
    description: 'تقنية مبتكرة لحماية عائلتك من مخاطر الانزلاق',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
} 