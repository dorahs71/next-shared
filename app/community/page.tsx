import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.svg';
import communityIcon from '@/assets/icons/community.svg';
import eventsIcon from '@/assets/icons/events.svg';
import styles from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          One shared passion: <span className={styles.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={styles.main}>
        <h2>Community Perks</h2>

        <ul className={styles.perks}>
          <li>
            <p>Share & discover recipes</p>
            <Image src={mealIcon} alt="A delicious meal" />
          </li>
          <li>
            <p>Find like-minded people</p>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
          </li>
          <li>
            <p>Join exclusive events</p>
            <Image src={eventsIcon} alt="A crowd of people at a cooking event" />
          </li>
        </ul>
      </main>
    </>
  );
}
