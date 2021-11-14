import React from "react";
import styles from "./market.module.scss"
import ListingList from "../../../src/components/marketplace/ListingList";
import Sidebar from "../../../src/components/marketplace/Sidebar"
import Layout from "../../../src/components/layout"

const Marketplace = () => {
	return (
		<Layout Marketplace>
			<div className={styles.container}>
				<section className={styles.section}>
					<aside className={styles.aside}>
						<Sidebar />
					</aside>

					<main className={styles.main}>
						<h1>Feed</h1>
						<ListingList />
					</main>
				</section>
			</div>
		</Layout>
		
	);
};

export default Marketplace;
