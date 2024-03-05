import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import logo from '@/public/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoWrapper} href="/">
        <Image className={styles.logo} src={logo} alt="shared logo" priority />
        <div className={styles.logoText}>SHARED</div>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share Meal</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
