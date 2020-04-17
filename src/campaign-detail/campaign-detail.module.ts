import { Module } from '@nestjs/common';
import { CampaignDetailController } from './campaign-detail.controller';
import { CampaignDetailService } from './campaign-detail.service';

@Module({
  imports: [
  ],
  controllers: [CampaignDetailController],
  providers: [CampaignDetailService]
})
export class CampaignDetailModule { }