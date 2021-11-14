import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { Provider } from "react-redux";
import store from "../store/store";

export const siteTitle = "TuzaHub";

const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </header>

      <main>{children}</main>

      <footer>
        <Footer home={home} />
      </footer>
    </div>
  );
};

export default Layout;
