import { db, Meal } from '@/initdb';
import slugify from 'slugify';
import * as fs from 'fs';
import { MealFormData } from '@/lib/actions';
import xss from 'xss';

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Loading Meals Failed');
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealDetail(slug: string) {
  // return db.prepare('SELECT * WHERE slug =' + slug); //have concern of db injection
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal: MealFormData) {
  await handleMealFormData(meal)
    .then((mealObj: Meal) => {
      db.prepare(
        `INSERT INTO meals(slug, title, image, summary, instructions, creator, creator_email) VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)`,
      ).run(mealObj);
    })
    .catch((error) => {
      console.error('Error handling meal form data:', error);
    });
}

async function handleMealFormData(meal: MealFormData): Promise<Meal> {
  const slug = slugify(meal.title, { lower: true }); // convert to lower case
  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`;
  const imagePath = `/images/${fileName}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`); // files will save in the file system instead of saving in db
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error('Saving image failed!');
  });

  return {
    slug,
    title: meal.title,
    image: imagePath,
    summary: meal.summary,
    instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
  };
}
