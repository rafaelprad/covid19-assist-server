import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesDetailController } from './countries-detail/countries-detail.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CountriesDetailController],
  providers: [AppService],
})
export class AppModule { }
