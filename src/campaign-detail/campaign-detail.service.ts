import { Injectable } from '@nestjs/common';
import { ICampaignDetail } from '../models/icampaign-detail';
import { BaseService } from '../shared/base-service';
import { stringify } from 'querystring';
import { IResponse } from '../models/iresponse';

@Injectable()
export class CampaignDetailService extends BaseService<ICampaignDetail> {

  constructor() {

    super();

    super.strTableName = 'CampaignDetail';
  }

  async listCampaignDetail(): Promise<IResponse<ICampaignDetail[]>> {
    let response: IResponse<ICampaignDetail[]> = null;
    await super.findAll((success: boolean, message: string, data?: ICampaignDetail[]) => {
      if (success) {
        response.message = message;
        response.data = data;
      } else {
        response.error = message;
      }
    }, 'Sorry, this operation wasn\'t be possible to list our campaign-detail.', 'Successfuly listed.');
    return response;
  }

  async getCampaignDetail(campaignDetailId): Promise<IResponse<ICampaignDetail>> {
    let response: IResponse<ICampaignDetail> = null;
    await super.findOne(campaignDetailId, (success: boolean, message: string, data?: ICampaignDetail) => {
      if (success) {
        response.message = message;
        response.data = data;
      } else {
        response.error = message;
      }
    }, 'Sorry, this operation wasn\'t be possible to find our campaign-detail with this id.', 'Successfuly found.');
    return response;
  }

  async addCampaignDetail(newCampaignDetail_: ICampaignDetail): Promise<IResponse<ICampaignDetail>> {
    let response: IResponse<ICampaignDetail> = null;
    await super.add(newCampaignDetail_, (success: boolean, message: string, data?: ICampaignDetail) => {
      if (success) {
        response.message = message;
        response.data = data;
      } else {
        response.error = message;
      }
    }, 'Sorry, this operation wasn\'t be possible to add this new campaign-detail.', 'Successfuly added.');
    return response;
  }

  async updateCampaignDetail(campaignDetailId, editCampaignDetail_: ICampaignDetail): Promise<IResponse<ICampaignDetail>> {
    let response: IResponse<ICampaignDetail> = null;
    await super.update(campaignDetailId, editCampaignDetail_, (success: boolean, message: string, data?: ICampaignDetail) => {
      if (success) {
        response.message = message;
        response.data = data;
      } else {
        response.error = message;
      }
    }, 'Sorry, this operation wasn\'t be possible to updated this new data campaign-detail.', 'Successfuly updated.');
    return response;
  }

  async deleteCampaignDetail(campaignDetailId): Promise<IResponse<ICampaignDetail>> {
    let response: IResponse<ICampaignDetail> = null;
    await super.delete(campaignDetailId, (success: boolean, message: string, data?: ICampaignDetail) => {
      if (success) {
        response.message = message;
        response.data = data;
      } else {
        response.error = message;
      }
    }, 'Sorry, this operation wasn\'t be possible to delete this campaign-detail.', 'Successfuly deleted.');
    return response;
  }
}
