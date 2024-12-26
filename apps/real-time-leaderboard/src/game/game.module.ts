import { DynamicModule, Module } from '@nestjs/common';
import { ActivityController } from './activity.controller';
import { ScoreController } from './score.controller';

@Module({})
export class GameModule {
  static forRoot(): DynamicModule {
    return {
      module: GameModule,
      global: true,
      controllers: [ActivityController, ScoreController],
    };
  }
}
