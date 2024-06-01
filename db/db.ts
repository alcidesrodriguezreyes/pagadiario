import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import drizzleConfig from "../drizzle.config";

export const connection = await mysql.createConnection(
  drizzleConfig.dbCredentials
);

export const db = drizzle(connection);
