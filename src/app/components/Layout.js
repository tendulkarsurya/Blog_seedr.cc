import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <head>
        <title>{"Seedr.cc Blog - TendulkarSuriya"}</title>
        <meta
          name="description"
          content={
            "Explore Seedr.cc, a platform for fast, secure, and convenient torrenting. Learn about its features, benefits, and more."
          }
        />
        <meta
          name="keywords"
          content="Seedr.cc, torrenting, cloud storage, fast downloads, secure connections, streaming, device compatibility"
        />
        <meta name="author" content="Tendulkar Suriya" />
        <meta property="og:title" content={"Seedr.cc Blog - TendulkarSuriya"} />
        <meta
          property="og:description"
          content={
            "Explore Seedr.cc, a platform for fast, secure, and convenient torrenting. Learn about its features, benefits, and more."
          }
        />
        <meta property="og:image" content="/images/fast-downloads.jpg" />
        <meta property="og:url" content="https://seedr.cc" />
        <meta property="og:author" content="Tendulkar Suriya" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={"Seedr.cc Blog - TendulkarSuriya"}
        />
        <meta
          name="twitter:description"
          content={
            "Explore Seedr.cc, a platform for fast, secure, and convenient torrenting. Learn about its features, benefits, and more."
          }
        />
        <meta name="twitter:image" content="/images/fast-downloads.jpg" />
      </head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
