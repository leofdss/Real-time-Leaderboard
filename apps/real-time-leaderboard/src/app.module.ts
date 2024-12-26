import { Module } from '@nestjs/common';
import { LearderboardModule } from './learderboard/learderboard.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [LearderboardModule.forRoot(), GameModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
