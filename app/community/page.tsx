import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.svg';
import communityIcon from '@/assets/icons/community.svg';
import eventsIcon from '@/assets/icons/events.svg';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Share Meal Community',
  description: 'Join our vibrant community to share delicious meals.',
};

export default function CommunityPage() {
  return (
    <>
      <header className={'header'}>
        <h1>
          One shared passion: <span className={'highlight'}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
        <h2>Community Perks</h2>
      </header>
      <div>
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
      </div>
    </>
  );
}
