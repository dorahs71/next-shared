import styles from './header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src="/logo.svg" alt="shared logo" />
        <div className={styles.logoText}>SHARED</div>
      </div>
    </>
  );
}
