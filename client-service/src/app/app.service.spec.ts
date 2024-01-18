import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getStatus', () => {
    it('should return "Client-service is up and running"', () => {
      expect(service.getStatus()).toEqual({
        message: 'Client-service is up and running',
      });
    });
  });
});
