import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class ActivityDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;
}

export class ActivitiesResponseDto {
  @ValidateNested({ each: true })
  @Type(() => ActivityDto)
  @IsNotEmpty()
  @Expose()
  activities: ActivityDto[];
}
