// import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsPositive()
  @IsOptional()
  // @Type(() => Number) ValidationPipe.transformOptions.enableImplicitConversion = true
  limit: number;

  @IsPositive()
  @IsOptional()
  // @Type(() => Number) ValidationPipe.transformOptions.enableImplicitConversion = true
  offset: number;
}
