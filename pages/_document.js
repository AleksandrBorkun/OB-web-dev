import { Html, Head, Main, NextScript } from "next/document";

const isLocal = process.env.LOCAL_ENV;
export default function Document() {
  return (
    <Html>
      <Head>
      {/* <!-- Google tag (gtag.js) --> */}
      {!isLocal && <meta name="google-site-verification" content="_Mj2o2Y4toCnhEhzYpsG9_P1hhAQkQzGIWK7ExsZv4g" />}
      {!isLocal && <script async src="https://www.googletagmanager.com/gtag/js?id=G-3P12M9V37J"></script>}
      {!isLocal && <script dangerouslySetInnerHTML={`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3P12M9V37J');`}/>}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxanium&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
