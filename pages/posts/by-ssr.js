import Layout from "@/layout";
import Link from "next/link";

export default function Post(props) {
  return (
    <Layout metaTitle={"Posts"}>
      <ul>
        {props?.posts?.map((item) => (
          <li key={item?.id}>
            <Link href={`/posts/${item?.id}`}>{item?.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  const posts = await res.json();
  return { props: { posts } };
}
