import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'spotikuser',
      password: 'potikpassword',
      database: 'learn-nest',
      autoLoadEntities: true,
      synchronize: false, // disable in prod
    }),
  ],
})
export class DbModule {}
