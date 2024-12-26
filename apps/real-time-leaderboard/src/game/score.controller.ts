import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ScoreDto } from './models/score.model';

@Controller()
export class ScoreController {
  @Post('score')
  async save(
    @Body() score: ScoreDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    res.status(HttpStatus.CREATED);
    console.log(score);
  }
}
