import Link from "next/link";

const Supply = () => {
	return (
		<>
			<h1>Supply Homepage</h1>
			<Link passHref href="/">
				&larr; Go back to Homepage
			</Link>
		</>
	);
};

export default Supply;
