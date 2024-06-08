import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() pagingQuery) {
    const { limit, offset } = pagingQuery;
    return `All coffees handler limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `We will update resource with ${id}, via ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `We are going to delete coffee with this ${id}`;
  }
}
