import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ScoreDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  activityId: string;

  @IsNumber()
  @IsNotEmpty()
  @Expose()
  score: number;
}
