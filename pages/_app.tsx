import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import Script from 'next/script';
// import { Footbar } from '../components/Footbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script strategy="lazyOnload">
        {` window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    }); `}
      </Script>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footbar /> */}
    </>
  );
}

export default MyApp;
