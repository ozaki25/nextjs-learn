import React from "react";
import Link from "next/link";
import Layout from "../components/MyLayout";

function PostLink({ id }) {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  );
}

function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="Hello Next.js" />
        <PostLink id="Learn Next.js is awesome" />
        <PostLink id="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}

export default Blog;
