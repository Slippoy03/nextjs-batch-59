import Layout from "@/layout";
import { useRouter } from "next/router";

export default function ProfileDetail() {
  const router = useRouter();
  const slug = router?.query?.slug ?? "";
  const product_id = router?.query?.product_id ?? "";
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

  const detailProduct = !!product_id
    ? products.find((item) => item?.id === Number(product_id))
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
      <p>ID: {detailProduct?.id}</p>
      <p>Name: {detailProduct?.name}</p>   
    </Layout>
  );
}
