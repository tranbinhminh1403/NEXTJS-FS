import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: 'db/migration',
  schema: './db/schema.ts',
  dialect: 'mysql',
  // dbCredentials: {
  //   host: process.env.DATABASE_HOST || 'localhost',
  //   port: Number(process.env.DATABASE_PORT) || 3306,
  //   user: process.env.DATABASE_USER,
  //   password: process.env.DATABASE_PASSWORD,
  //   database: process.env.DATABASE_NAME || 'my_database',
  // },
});
