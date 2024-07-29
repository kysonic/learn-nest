import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { DbModule } from './db/db.module';
import { EventModule } from './events/event.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoffeesModule,
    EventModule,
    CoffeeRatingModule,
    DatabaseModule,
    DbModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Could register pipe globally
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class AppModule {}
