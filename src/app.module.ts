import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'spotikuser',
      password: 'potikpassword',
      database: 'learn-nest',
      autoLoadEntities: true,
      synchronize: true, // disable in prod
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
