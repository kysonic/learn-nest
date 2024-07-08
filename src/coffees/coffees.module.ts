import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffee.constans';

// class MockCoffeeService {}

// {
//   provide: CoffeesService,
//   useValue: new MockCoffeeService(),
// }

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable()
class CoffeeBrandFactory {
  create() {
    return ['nescafe', 'coffee brew'];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandFactory,
    // {
    //   provide: COFFEE_BRANDS,
    //   useValue: ['nescafe', 'coffee brew'],
    // },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: () => ['nescafe', 'coffee brew'],
    // },
    {
      provide: COFFEE_BRANDS,
      useFactory: async (coffeeBrandFactory: CoffeeBrandFactory) => {
        // sql run some query
        const brands = await Promise.resolve(coffeeBrandFactory.create());
        console.log('Async factory', brands);
        return brands;
      },
      inject: [CoffeeBrandFactory],
    },
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'production'
          ? ProductionConfigService
          : DevelopmentConfigService,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
