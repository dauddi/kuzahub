import Link from "next/link";

const Marketplace = () => {
	return (
		<>
			<h1>Marketplace Homepage</h1>
			<Link passHref href="/">
				&larr; Go back to Homepage
			</Link>
		</>
	);
};

export default Marketplace;
