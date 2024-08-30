import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class EventDto {
  @IsString()
  title: string;

  @Type(() => Date)
  @IsDate({ message: 'Invalid date' })
  dateOfEvent: Date;

  @IsString()
  place: string;

  @IsString()
  category: string;

  @IsString()
  description: string;
}
