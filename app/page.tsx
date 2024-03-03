import Link from 'next/link';

export default function Home() {
  return (
      <main>
        <img src="/logo.svg" alt="shared logo" />
        <h1>Welcome to Shared!</h1>
        <p>Let's share what you love to eat.</p>
          <p><Link href="/about">About Us</Link></p>
      </main>
  );
}