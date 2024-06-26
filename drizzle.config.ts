import type { Config } from 'drizzle-kit';

export default {
    schema: './db/schema.ts',
    out: './drizzle',
    //   driver: 'mysql2',
    dialect: 'mysql',
    dbCredentials: {
        host: process.env.DATABASE_HOST || '',
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME || '',
    },
} satisfies Config;
