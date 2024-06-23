import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly entityRepository: Repository<Event>,
  ) {}

  findAll() {
    return this.entityRepository.find();
  }

  findOne(id: string) {
    return this.entityRepository.findOne({
      where: {
        id: +id,
      },
    });
  }
}
