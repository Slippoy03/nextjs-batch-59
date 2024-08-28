import Link from "next/link";

export default function Navigation() {
  return (
    <ul style={{ marginBottom: "1rem" }}>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/about-me"}>About Me</Link>
      </li>
      <li>
        <Link href={"/profile"}>Profile</Link>
      </li>
      <hr />
    </ul>
  );
}
