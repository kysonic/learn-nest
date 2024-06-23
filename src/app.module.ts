import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { DbModule } from './db/db.module';
import { EventModule } from './events/event.module';
@Module({
  imports: [CoffeesModule, DbModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
