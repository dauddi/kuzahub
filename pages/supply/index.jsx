import Link from "next/link";
import styles from "../../styles/Home.module.css"

const Supply = () => {
	return (
		<div className={styles.main}>
			<h1>Supply Homepage</h1>
			<Link passHref href="/">
				<h2>
					&larr; Go back to Homepage
				</h2>
			</Link>
		</div>
	);
};

export default Supply;
