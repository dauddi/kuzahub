import React from "react";
import Link from "next/link"

const Homepage = () => {
	return (
        <div>
            <h1>Homepage</h1>
            <Link href="./ap/services">Services</Link>
            <Link href="./nu/register" passHref >
                <button>
                    Register
                </button>
            </Link>
            <Link href="./ap/login" passHref >
                <button>
                    Login
                </button>
            </Link>
        </div>
    ) 
    
};

export default Homepage;
