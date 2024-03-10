import styles from './page.module.css';
import { getMealDetail } from '@/lib/meals';
import { Meal } from '@/initdb';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function MealDetailsPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal: Meal = await getMealDetail(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <div>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </div>
    </>
  );
}
