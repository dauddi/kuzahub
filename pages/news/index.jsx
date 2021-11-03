import Link from "next/link"

const News = () => {
    return (
        <>
            <h1>News Homepage</h1>
            <Link passHref href="/">
                    &larr; Go back to Homepage
            </Link>
        </>
    )
}

export default News;