export interface Influencer {
  id: string;
  name: string;
  category: string;
  gender: 'Male' | 'Female' | 'Other';
  followerCount: number;
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'Twitter' | 'Facebook';
  email: string;
  joinDate: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

export interface Post {
  id: string;
  influencerId: string;
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'Twitter' | 'Facebook';
  date: string;
  url: string;
  caption: string;
  reach: number;
  likes: number;
  comments: number;
  shares: number;
  campaignId?: string;
}

export interface TrackingData {
  id: string;
  source: string;
  campaignId: string;
  influencerId: string;
  userId: string;
  product: string;
  date: string;
  orders: number;
  revenue: number;
  conversionRate: number;
}

export interface Payout {
  id: string;
  influencerId: string;
  basis: 'post' | 'order' | 'flat_fee';
  rate: number;
  orders: number;
  totalPayout: number;
  paymentDate: string;
  status: 'Pending' | 'Paid' | 'Processing';
  campaignId: string;
}

export interface Campaign {
  id: string;
  name: string;
  brand: string;
  product: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: 'Active' | 'Completed' | 'Planned';
  objective: string;
}

export interface ROIMetrics {
  campaignId: string;
  totalRevenue: number;
  totalSpend: number;
  roi: number;
  roas: number;
  orders: number;
  averageOrderValue: number;
  costPerOrder: number;
  impressions: number;
  clicks: number;
  ctr: number;
}

export interface DashboardFilters {
  brand?: string;
  product?: string;
  influencerType?: string;
  platform?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  campaign?: string;
}