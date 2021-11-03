import Link from "next/link";
import styles from "../../styles/Home.module.css"

const Marketplace = () => {
	return (
		<div className={styles.main}>
			<h1>Marketplace Homepage</h1>
			<Link passHref href="/">
				<h2>
					&larr; Go back to Homepage
				</h2>
			</Link>
		</div>
	);
};

export default Marketplace;
