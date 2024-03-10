import { db } from '../initdb';

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Loading eals Filed');
  return db.prepare('SELECT * FROM meals').all();
}
