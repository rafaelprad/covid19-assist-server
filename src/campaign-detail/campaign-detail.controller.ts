import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { CampaignDetailService } from './campaign-detail.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { ICampaignDetail } from 'src/models/icampaign-detail';

@Controller('campaign-detail')
export class CampaignDetailController {

  constructor(private campaignDetailService: CampaignDetailService) { }

  @Get('list')
  async listCampaignDetail(@Res() res) {
    const responseCampaignsDetail = await this.campaignDetailService.listCampaignDetail();
    return res.status(HttpStatus.OK).json(responseCampaignsDetail);
  }

  @Get(':id')
  async getCampaignDetail(@Res() res, @Param('id', new ValidateObjectId()) campaignDetailId) {
    const campaignDetail = await this.campaignDetailService.getCampaignDetail(campaignDetailId);
    if (!campaignDetail) throw new NotFoundException('Campaign-detail does not exist!');
    return res.status(HttpStatus.OK).json(campaignDetail);

  }

  @Post()
  async addCampaignDetail(@Res() res, @Body() newCampaignDetail_: ICampaignDetail) {
    const newCampaignDetail = await this.campaignDetailService.addCampaignDetail(newCampaignDetail_);
    return res.status(HttpStatus.OK).json(newCampaignDetail);
  }

  @Put()
  async editCampaignDetail(@Res() res, @Query('campaignDetail', new ValidateObjectId()) campaignDetailId, @Body() updateCampaignDetail_: ICampaignDetail
  ) {
    const updateCampaignDetail = await this.campaignDetailService.updateCampaignDetail(campaignDetailId, updateCampaignDetail_);
    if (!updateCampaignDetail) throw new NotFoundException('Campaign-detail does not exist!');
    return res.status(HttpStatus.OK).json(updateCampaignDetail);
  }

  @Delete()
  async deleteCampaignDetail(@Res() res, @Query('campaignDetailId', new ValidateObjectId()) campaignDetailId) {
    const deleteCampaignDetail = await this.campaignDetailService.deleteCampaignDetail(campaignDetailId);
    if (!deleteCampaignDetail) throw new NotFoundException('Campaign-detail does not exist!');
    return res.status(HttpStatus.OK).json(deleteCampaignDetail);
  }
}
