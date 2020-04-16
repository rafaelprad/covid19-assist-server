import { ICampaignDetail } from "./icampaign-detail";

export interface ICampaignFamilyDetail {
  id: string,
  name: string,
  linkedinProfile: string,
  facebookProfile: string,
  mobilePhone: string,
  listCampaign: ICampaignDetail[];
}