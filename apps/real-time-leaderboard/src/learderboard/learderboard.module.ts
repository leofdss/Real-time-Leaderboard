import { DynamicModule, Module } from '@nestjs/common';
import { LearderboardGateway } from './learderboard.gateway';

@Module({})
export class LearderboardModule {
  static forRoot(): DynamicModule {
    return {
      module: LearderboardModule,
      global: true,
      providers: [LearderboardGateway],
    };
  }
}
