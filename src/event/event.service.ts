import { Injectable, NotFoundException } from '@nestjs/common';
import { EventDto } from './event.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const event = await this.prisma.event.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!event) throw new NotFoundException('Event not found');

    return event;
  }

  getAll() {
    return this.prisma.event.findMany();
  }

  create(dto: EventDto) {
    return this.prisma.event.create({
      data: dto,
    });
  }

  async update(id: string, dto: Partial<EventDto>) {
    const event = await this.getById(id);

    return this.prisma.event.update({
      where: {
        id: Number(id),
      },
      data: {
        ...event,
        ...dto,
      },
    });
  }

  delete(id: string) {
    return this.prisma.event.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
