import Footer from "../Footer";
import Nav from "../Nav";
import Head from "next/head";

export const siteTitle = "Bloom Collective";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Business-driven content workflows." />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      {home ? (
        <header className="text-white">
          <Nav />
        </header>
      ) : (
        <header className="text-black">
          <Nav />
        </header>
      )}
      <body className="text-black text-lg">
        {children}
        <Footer />
      </body>
    </>
  );
}
