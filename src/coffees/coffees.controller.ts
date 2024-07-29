import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  Inject,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { COFFEE_BRANDS } from './coffee.constans';
import { Public } from 'src/common/decorators/publicDecorator';

// @UsePipes(new ValidationPipe())
@Controller('coffees')
export class CoffeesController {
  constructor(
    private readonly coffeeService: CoffeesService,
    @Inject(COFFEE_BRANDS) coffeeBrands,
  ) {}

  // @UsePipes(new ValidationPipe())
  @Get()
  @Public()
  findAll(@Query() pagingQuery: PaginationQueryDto) {
    return this.coffeeService.findAll(pagingQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
    // @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }

  @Patch('/recommend/:id')
  recommendCoffee(@Param('id') id: string) {
    return this.coffeeService.recommendCoffee(id);
  }
}
