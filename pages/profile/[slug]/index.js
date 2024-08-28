import Layout from "@/layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfileDetail() {
  const router = useRouter();
  const slug = router?.query?.slug ?? "";
  const userProfile = [
    {
      id: 1,
      name: "Pace",
      age: "24",
    },
    {
      id: 2,
      name: "Umar",
      age: "25",
    },
    {
      id: 3,
      name: "Rehan",
      age: "26",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Baju Bola",
    },
    {
      id: 2,
      name: "Laptop",
    },
    {
      id: 3,
      name: "Buku",
    },
  ];

  const detailUser = !!slug
    ? userProfile.find((item) => item?.id === Number(slug))
    : {};

  return (
    <Layout>
      <button onClick={() => router.back()}>Back</button>
      <p>User</p>
      <p>--------</p> 
      <p>ID: {detailUser?.id}</p>
      <p>Name: {detailUser?.name}</p>
      <hr />
      <p>Products</p>
      <p>--------</p> 
      <ul>
        {products?.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: `/profile/${slug}/products/${item.id}`,
                // query: {
                //   name: item.name,
                //   age: item.age
                // },
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
