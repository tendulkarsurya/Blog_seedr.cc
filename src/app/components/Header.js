import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Seedr Blog</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/features">Features</Link>
        <Link href="https://www.seedr.cc/premium">Pricing</Link>
      </nav>
    </header>
  );
}
