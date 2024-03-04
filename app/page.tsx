import Header from '@/components/header';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}
