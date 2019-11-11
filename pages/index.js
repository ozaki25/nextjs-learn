import React from "react";
import Link from "next/link";

function Index() {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}

export default Index;
