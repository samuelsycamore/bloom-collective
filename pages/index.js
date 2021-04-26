import Head from "next/head";
import Hero from "../components/old/Hero";
import HeaderNav from "../components/old/HeaderNav";
import Footer from "../components/old/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Business-driven content workflows</title>
        <meta name="title" content="Business-driven content workflows" />
        <meta
          name="description"
          content="Every business needs to be a content producer. Let Bloom Collective show you how to do it right."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bloomcollective.com/" />
        <meta property="og:title" content="Business-driven content workflows" />
        <meta
          property="og:description"
          content="Every business needs to be a content producer. Let Bloom Collective show you how to do it right."
        />
        <meta
          property="og:image"
          content="https://bloomcollective.com/og-image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bloomcollective.com/" />
        <meta
          property="twitter:title"
          content="Business-driven content workflows"
        />
        <meta
          property="twitter:description"
          content="Every business needs to be a content producer. Let Bloom Collective show you how to do it right."
        />
        <meta
          property="twitter:image"
          content="https://bloomcollective.com/og-image.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <HeaderNav />
      <Hero />
      <Footer />
    </div>
  );
}
