import Link from 'next/link';
import Image from 'next/image';

import styles from './main-header.module.css';
import logo from '@/public/logo.svg';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logoWrapper} href="/">
          <Image className={styles.logo} src={logo} alt="shared logo" priority />
          <div className={styles.logoText}>SHARED</div>
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Explore Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
