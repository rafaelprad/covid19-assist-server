import { ICampaign } from "./icampaign";

export interface ICampaignDetail {
  id: string,
  campaign: ICampaign,
  description: string,
  quantity: string
}