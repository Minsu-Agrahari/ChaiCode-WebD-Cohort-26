// line 1-6: Connect Drizzle ORM to the database -- <Drizzle website>

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!);

