import './globals.css';
import './port-overrides.css';
import './dark-theme.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { fragment } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ammacaircraft.com'),
  title: {
    default: 'AMMAC Aircraft Parts — Aviation Aftermarket & Supply Chain Solutions',
    template: '%s — AMMAC Aircraft Parts',
  },
  description:
    'AMMAC Aircraft Parts delivers aviation aftermarket and supply chain solutions — aircraft components, rotables, consumables, repair management, warehousing, and global logistics from Dubai and Singapore. 24/7 AOG support.',
  authors: [{ name: 'AMMAC Aircraft Parts' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'AMMAC Aircraft Parts',
    title: 'AMMAC Aircraft Parts — Aviation Aftermarket & Supply Chain Solutions',
    description:
      'Global aircraft parts supply, AOG support, and repair management. Strategically positioned inventory in Dubai & Singapore with 24/7 AOG support.',
    url: 'https://www.ammacaircraft.com/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMMAC Aircraft Parts — Aviation Aftermarket & Supply Chain Solutions',
    description:
      'Global aircraft parts supply, AOG support, and repair management. 24/7 AOG support from Dubai & Singapore.',
  },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AMMAC Aircraft Parts',
  url: 'https://www.ammacaircraft.com/',
  slogan: "We Keep Flyin'",
  description:
    'Global supplier of aircraft components, rotable assets, consumables, and repair management solutions.',
  email: 'Sales@AMMACAircraft.com',
  telephone: '+971552637089',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = fragment('header');
  const footer = fragment('footer');
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, background: '#fdfdfc' }}>
        <Script id="amm-theme-init" strategy="beforeInteractive">
          {`(function(){var d=document.documentElement;function get(){try{var s=localStorage.getItem('amm-theme');if(s==='dark'||s==='light')return s;}catch(e){}return (window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';}
d.setAttribute('data-theme',get());
window.__ammSetTheme=function(t){d.classList.add('theme-transition');d.setAttribute('data-theme',t);try{localStorage.setItem('amm-theme',t);}catch(e){}try{var b=document.querySelectorAll('[data-theme-toggle]');for(var i=0;i<b.length;i++){b[i].setAttribute('aria-pressed',t==='dark'?'true':'false');}}catch(e){}window.clearTimeout(window.__ammTT);window.__ammTT=window.setTimeout(function(){d.classList.remove('theme-transition');},450);};
window.__ammToggleTheme=function(){var cur=d.getAttribute('data-theme')==='dark'?'dark':'light';window.__ammSetTheme(cur==='dark'?'light':'dark');};})();`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a href="#amm-root" className="amm-skip">
          Skip to content
        </a>
        <div dangerouslySetInnerHTML={{ __html: header }} />
        <div id="amm-root">{children}</div>
        <div dangerouslySetInnerHTML={{ __html: footer }} />
        <Script src="/js/core.bundle.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
