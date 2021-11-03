import Link from "next/link";

const Investment = () => {
	return (
		<>
			<h1>Investment Homepage</h1>
			<Link passHref href="/">
				&larr; Go back to Homepage
			</Link>
		</>
	);
};

export default Investment;
