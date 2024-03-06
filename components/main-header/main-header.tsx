import Link from 'next/link';
import Image from 'next/image';
import styles from './main-header.module.css';
import logo from '@/public/logo.svg';
import MainHeaderBackground from './main-header-background';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logoWrapper} href="/public">
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
    </>
  );
}
