export interface PartnerModel {
  id:  string | number;
  partnerName: string;
  partnerType: string;
  conversions: number;
  commissions: number;
  grosssales: number;
  contract: string;
}

export interface HeaderTableModel extends PartnerModel {
  isSort?: boolean;
  sort?: string;
}
