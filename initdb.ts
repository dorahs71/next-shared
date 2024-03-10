const sql = require('better-sqlite3');

export interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export const db = sql('meals.db');

const dummyMeals: Meal[] = [
  {
    title: 'Juicy Cheese Burger',
    slug: 'juicy-cheese-burger',
    image: '/images/burger.jpeg',
    summary:
      'A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.',
    instructions: `1. Prepare the patty:
  Mix 200g of ground beef with salt and pepper. Form into a patty.

2. Cook the patty:
  Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

3. Assemble the burger:
  Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

4. Serve:
  Complete the assembly with the top bun and serve hot.
  `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
];

db.prepare(
  `
CREATE TABLE IF NOT EXISTS meals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  summary TEXT NOT NULL,
  instructions TEXT NOT NULL,
  creator TEXT NOT NULL,
  creator_email TEXT NOT NULL
)
`,
).run();

async function initData() {
  const stmt = db.prepare(`
INSERT or REPLACE INTO meals VALUES (
  null,
  @slug,
  @title,
  @image,
  @summary,
  @instructions,
  @creator,
  @creator_email
)
  `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
