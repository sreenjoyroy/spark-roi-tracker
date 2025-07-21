import { Influencer, Post, TrackingData, Payout, Campaign, ROIMetrics } from '@/types/influencer';

export const mockInfluencers: Influencer[] = [
  {
    id: 'inf_001',
    name: 'Priya Sharma',
    category: 'Fitness',
    gender: 'Female',
    followerCount: 245000,
    platform: 'Instagram',
    email: 'priya.sharma@email.com',
    joinDate: '2023-01-15',
    status: 'Active'
  },
  {
    id: 'inf_002',
    name: 'Rohit Mehta',
    category: 'Nutrition',
    gender: 'Male',
    followerCount: 180000,
    platform: 'YouTube',
    email: 'rohit.mehta@email.com',
    joinDate: '2023-02-20',
    status: 'Active'
  },
  {
    id: 'inf_003',
    name: 'Asha Gupta',
    category: 'Wellness',
    gender: 'Female',
    followerCount: 320000,
    platform: 'Instagram',
    email: 'asha.gupta@email.com',
    joinDate: '2023-03-10',
    status: 'Active'
  },
  {
    id: 'inf_004',
    name: 'Vikram Singh',
    category: 'Bodybuilding',
    gender: 'Male',
    followerCount: 156000,
    platform: 'TikTok',
    email: 'vikram.singh@email.com',
    joinDate: '2023-04-05',
    status: 'Active'
  },
  {
    id: 'inf_005',
    name: 'Neha Agarwal',
    category: 'Lifestyle',
    gender: 'Female',
    followerCount: 89000,
    platform: 'Instagram',
    email: 'neha.agarwal@email.com',
    joinDate: '2023-05-12',
    status: 'Inactive'
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: 'camp_001',
    name: 'Summer Fitness Challenge',
    brand: 'HealthKart',
    product: 'Whey Protein',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    budget: 500000,
    status: 'Active',
    objective: 'Brand Awareness & Sales'
  },
  {
    id: 'camp_002',
    name: 'Post-Workout Recovery',
    brand: 'HealthKart',
    product: 'BCAA',
    startDate: '2024-07-15',
    endDate: '2024-09-15',
    budget: 300000,
    status: 'Active',
    objective: 'Sales Conversion'
  },
  {
    id: 'camp_003',
    name: 'Immunity Boost Campaign',
    brand: 'HealthKart',
    product: 'Multivitamins',
    startDate: '2024-08-01',
    endDate: '2024-10-31',
    budget: 400000,
    status: 'Planned',
    objective: 'Product Launch'
  }
];

export const mockPosts: Post[] = [
  {
    id: 'post_001',
    influencerId: 'inf_001',
    platform: 'Instagram',
    date: '2024-07-15',
    url: 'https://instagram.com/p/summer-fitness',
    caption: 'Starting my summer fitness journey with @healthkart whey protein! 💪 #FitnessGoals #HealthKart',
    reach: 89000,
    likes: 5420,
    comments: 234,
    shares: 89,
    campaignId: 'camp_001'
  },
  {
    id: 'post_002',
    influencerId: 'inf_002',
    platform: 'YouTube',
    date: '2024-07-20',
    url: 'https://youtube.com/watch?v=nutrition-tips',
    caption: 'Complete guide to post-workout nutrition with HealthKart BCAA',
    reach: 156000,
    likes: 8900,
    comments: 567,
    shares: 234,
    campaignId: 'camp_002'
  },
  {
    id: 'post_003',
    influencerId: 'inf_003',
    platform: 'Instagram',
    date: '2024-07-25',
    url: 'https://instagram.com/p/wellness-journey',
    caption: 'My daily wellness routine includes these amazing supplements from @healthkart ✨',
    reach: 234000,
    likes: 12800,
    comments: 891,
    shares: 456,
    campaignId: 'camp_001'
  }
];

export const mockTrackingData: TrackingData[] = [
  {
    id: 'track_001',
    source: 'Instagram',
    campaignId: 'camp_001',
    influencerId: 'inf_001',
    userId: 'user_001',
    product: 'Whey Protein',
    date: '2024-07-16',
    orders: 12,
    revenue: 18000,
    conversionRate: 2.3
  },
  {
    id: 'track_002',
    source: 'YouTube',
    campaignId: 'camp_002',
    influencerId: 'inf_002',
    userId: 'user_002',
    product: 'BCAA',
    date: '2024-07-21',
    orders: 8,
    revenue: 9600,
    conversionRate: 1.8
  },
  {
    id: 'track_003',
    source: 'Instagram',
    campaignId: 'camp_001',
    influencerId: 'inf_003',
    userId: 'user_003',
    product: 'Whey Protein',
    date: '2024-07-26',
    orders: 23,
    revenue: 34500,
    conversionRate: 3.1
  }
];

export const mockPayouts: Payout[] = [
  {
    id: 'payout_001',
    influencerId: 'inf_001',
    basis: 'order',
    rate: 200,
    orders: 12,
    totalPayout: 2400,
    paymentDate: '2024-08-01',
    status: 'Paid',
    campaignId: 'camp_001'
  },
  {
    id: 'payout_002',
    influencerId: 'inf_002',
    basis: 'post',
    rate: 5000,
    orders: 8,
    totalPayout: 5000,
    paymentDate: '2024-08-05',
    status: 'Processing',
    campaignId: 'camp_002'
  },
  {
    id: 'payout_003',
    influencerId: 'inf_003',
    basis: 'order',
    rate: 180,
    orders: 23,
    totalPayout: 4140,
    paymentDate: '2024-08-10',
    status: 'Pending',
    campaignId: 'camp_001'
  }
];

export const mockROIMetrics: ROIMetrics[] = [
  {
    campaignId: 'camp_001',
    totalRevenue: 52500,
    totalSpend: 6540,
    roi: 702.6,
    roas: 8.03,
    orders: 35,
    averageOrderValue: 1500,
    costPerOrder: 186.86,
    impressions: 323000,
    clicks: 8970,
    ctr: 2.78
  },
  {
    campaignId: 'camp_002',
    totalRevenue: 9600,
    totalSpend: 5000,
    roi: 92.0,
    roas: 1.92,
    orders: 8,
    averageOrderValue: 1200,
    costPerOrder: 625,
    impressions: 156000,
    clicks: 2808,
    ctr: 1.8
  }
];

export const generateMockData = () => ({
  influencers: mockInfluencers,
  campaigns: mockCampaigns,
  posts: mockPosts,
  trackingData: mockTrackingData,
  payouts: mockPayouts,
  roiMetrics: mockROIMetrics
});