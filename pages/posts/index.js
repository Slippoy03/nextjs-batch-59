import Layout from "@/layout";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Post(props) {
  return (
    <Layout metaTitle={"Posts"}>
      <ul>
        {props?.notes?.map((item) => (
          <li key={item?.id}>
            <Link href={`/posts/${item?.id}`}>{item?.title}</Link>
          </li>
        ))}
      </ul>
      <Button>Hello</Button>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/posts"
  );
  const notes = await res.json();
  return { props: { notes } };
}
