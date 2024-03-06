import styles from './page.module.css';
import Link from 'next/link';
import SlideShow from '@/components/slideshow/slideshow';
import { homeSlideShowImages } from './page.slideshow';

export default function Home() {
  return (
    <>
      <main className={styles.intro}>
        <div className={styles.slideshow}>
          <SlideShow images={homeSlideShowImages} />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Enjoy NextLevel Food</h1>
            <p>Taste & share food from all over the world!</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </main>
    </>
  );
}
