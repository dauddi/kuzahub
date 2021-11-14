import React from "react";
import styles from './homepage.module.scss'
import Link from "next/link"
import Layout from '../src/components/layout'
import Head from "next/head";
import Banner from "../src/components/homepage/Banner"
import PreviewListings from "../src/components/homepage/PreviewListings";

const Homepage = () => {
	return (
        <Layout home={true}>
            <Head>
				<title>TuzaHub</title>
			</Head>

            <div className={styles.container} >

                <header className={styles.header} >
                    <Banner />
                </header>

                <main className={styles.main}>
                    <section className={styles.preview} >
                        <PreviewListings />
                    </section>
                </main>
                
            </div>
        </Layout>
    )

};

export default Homepage;
