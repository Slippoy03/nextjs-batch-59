import Layout from "@/layout";
import Link from "next/link";

export default function Profile() {
  const userProfile = [
    {
      id: 1,
      name: "Pace",
      age: '24'
    },
    {
      id: 2,
      name: "Umar",
      age: '25'
    },
    {
      id: 3,
      name: "Rehan",
      age: '26'
    },
  ];

  return (
    <Layout>
      <ul>
        {userProfile?.map((item) => (
          <li key={item.id}>
            <Link
              href={{
                pathname: `/profile/${item.id}`,
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
