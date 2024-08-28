import Layout from "@/layout";
import Link from "next/link";

export default function Profile() {
  const userProfile = [
    {
      id: 1,
      name: "Pace",
      slug: "pace-ini-adalah-slug-uji-coba",
    },
    {
      id: 2,
      name: "Umar",
      slug: "umar-ini-adalah-slug-uji-coba",
    },
    {
      id: 3,
      name: "Rehan",
      slug: "rehan-ini-adalah-slug-uji-coba",
    },
  ];

  return (
    <Layout>
      <ul>
        {userProfile?.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: `/article/${item.slug}`,
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
