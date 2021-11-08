import Link from "next/link";
import React from "react";
import styles from "./market.module.css"
import ListingList from "../../../components/marketplace/ListingList";
import Sidebar from "../../../components/marketplace/Sidebar"
import Navbar from '../../../components/marketplace/Navbar'


const Marketplace = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Navbar />
			</header>

			<section className={styles.section}>
				<aside className={styles.aside}>
					<Sidebar />
				</aside>

				<main className={styles.main}>
					<h1>Feed</h1>
					<ListingList />
				</main>
			</section>

			<footer className={styles.footer}>
				<Link passHref href="/">
					<h2>
						&larr; Go back to Homepage
					</h2>
				</Link>
			</footer>			
		</div>
	);
};

export default Marketplace;
