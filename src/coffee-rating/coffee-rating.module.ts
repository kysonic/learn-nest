import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    CoffeesModule,
    DatabaseModule.register({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'rootpass',
      port: 3306,
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
