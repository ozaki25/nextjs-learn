import { useRouter } from "next/router";
import Layout from "../components/MyLayout";

function Page() {
  const router = useRouter();
  const {
    query: { title }
  } = router;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}

export default Page;
