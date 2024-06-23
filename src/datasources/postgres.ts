import * as path from 'path';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'spotikuser',
  password: 'potikpassword',
  database: 'learn-nest',
  entities: ['src/**/*.entity.ts'],
  subscribers: [],
  migrations: [path.resolve(__dirname, '../migrations/**/*.ts')],
});
