import { db } from '@/initdb';

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Loading Meals Failed');
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealDetail(slug: string) {
  // return db.prepare('SELECT * WHERE slug =' + slug); //have concern of db injection
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
