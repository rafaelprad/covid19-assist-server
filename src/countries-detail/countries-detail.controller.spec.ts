import { Test, TestingModule } from '@nestjs/testing';
import { CountriesDetailController } from './countries-detail.controller';

describe('CountriesDetail Controller', () => {
  let controller: CountriesDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesDetailController],
    }).compile();

    controller = module.get<CountriesDetailController>(CountriesDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
