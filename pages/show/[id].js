import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/MyLayout";

function Post({ show }) {
  const router = useRouter();
  const { name, summary, image } = show;

  return (
    <Layout>
      <h1>{name}</h1>
      <p>{summary.replace(/<[/]?[pb]>/g, "")}</p>
      <img src={image.medium} />
    </Layout>
  );
}

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();
  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post;
