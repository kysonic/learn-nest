import * as path from 'path';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'learn-nest',
  entities: ['src/**/*.entity.ts'],
  subscribers: [],
  migrations: [path.resolve(__dirname, '../migrations/**/*.ts')],
});
