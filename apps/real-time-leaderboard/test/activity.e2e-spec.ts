import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Activity (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('List', () => {
    return request(app.getHttpServer())
      .get(`/activities`)
      .expect(200)
      .expect({
        activities: [
          {
            id: 'aaaa',
            name: 'aaaa',
          },
        ],
      });
  });
});
