import MealItem from './meal-item';
import styles from './meals-grid.module.css';
import { Meal } from '@/initdb';

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
