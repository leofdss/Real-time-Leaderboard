import { Module } from '@nestjs/common';
import { LearderboardModule } from './learderboard/learderboard.module';

@Module({
  imports: [LearderboardModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
