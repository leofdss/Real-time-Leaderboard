import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { io } from 'socket.io-client';
import { LearderboardGateway } from '../src/learderboard/learderboard.gateway';

async function createNestApp(...gateways): Promise<INestApplication> {
  const testingModule = await Test.createTestingModule({
    providers: gateways,
  }).compile();
  const app = testingModule.createNestApplication();
  return app;
}

describe('LearderboardGateway', () => {
  let ws: ReturnType<typeof io>, app: INestApplication;

  it(`should handle message`, async () => {
    app = await createNestApp(LearderboardGateway);
    await app.listen(3000);

    ws = io('http://localhost:3000');
    ws.emit('push', {
      test: 'test',
    });
    await new Promise<void>((resolve) =>
      ws.on('pop', (data) => {
        expect(data.test).toBe('test');
        resolve();
      }),
    );
  });

  afterEach(() => {
    ws.disconnect();
    app.close();
  });
});
