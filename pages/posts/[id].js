import Layout from "@/layout";

export default function Post(props) {
  return (
    <Layout metaTitle={"Posts"}>
      <p>ID: {props?.detailPosts?.id}</p>
      <p>Title: {props?.detailPosts?.title}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  const posts = await res.json();
  const paths = posts?.map((item) => ({
    params: {
      id: String(item.id),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://my-json-server.typicode.com/typicode/demo/posts/${id}`
  );
  const detailPosts = await res.json();
  return { props: { detailPosts }, revalidate: '' };
}
