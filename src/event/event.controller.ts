import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getAll() {
    return this.eventService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.eventService.getById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: EventDto) {
    return this.eventService.create(dto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() dto: Partial<EventDto>) {
    return this.eventService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eventService.delete(id);
  }
}
