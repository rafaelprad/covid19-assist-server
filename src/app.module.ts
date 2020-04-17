import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesDetailController } from './countries-detail/countries-detail.controller';
import { CampaignDetailController } from './campaign-detail/campaign-detail.controller';
import { CampaignDetailModule } from './campaign-detail/campaign-detail.module';

@Module({
  imports: [HttpModule, CampaignDetailModule],
  controllers: [AppController, CountriesDetailController],
  providers: [AppService],
})
export class AppModule { }
