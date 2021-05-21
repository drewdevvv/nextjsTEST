import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World. I'm Andrew
      <div> </div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
