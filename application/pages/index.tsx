import React from "react";
import Link from "next/link";

export const Home: React.FC = () => {
    return (
        <>
            <h1>Index</h1>
            <Link href="/this/is/a/test/123">
                Test rewrite
            </Link>
            <br />
            <Link href="/test?id=123">
                Test no rewrite
            </Link>
        </>
    );

};

export default Home;
