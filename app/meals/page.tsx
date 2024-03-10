import Link from 'next/link';

import styles from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import Loading from '@/components/loading/loading';

export interface Meal {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

async function MealContainer() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={'cta'}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <div>
        <Suspense fallback={<Loading />}>
          <MealContainer />
        </Suspense>
      </div>
    </>
  );
}
