import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ActivitiesResponseDto } from './models/activity.model';
import { PlainToClass } from '../shared/plain-to-class';

@Controller()
export class ActivityController {
  @Get('activities')
  async get(
    @Res({ passthrough: true }) res: Response,
  ): Promise<ActivitiesResponseDto> {
    res.status(HttpStatus.OK);
    return PlainToClass.plainToClass(ActivitiesResponseDto, {
      activities: [
        {
          id: 'aaaa',
          name: 'aaaa',
        },
      ],
    });
  }
}
