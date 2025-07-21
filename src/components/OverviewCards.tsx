import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, BarChart3 } from 'lucide-react';

interface OverviewCardsProps {
  data: {
    campaigns: any[];
    influencers: any[];
    tracking: any[];
    roiMetrics: any[];
  };
}

export const OverviewCards = ({ data }: OverviewCardsProps) => {
  // Calculate metrics
  const totalRevenue = data.roiMetrics.reduce((sum, metric) => sum + metric.totalRevenue, 0);
  const totalSpend = data.roiMetrics.reduce((sum, metric) => sum + metric.totalSpend, 0);
  const totalOrders = data.roiMetrics.reduce((sum, metric) => sum + metric.orders, 0);
  const avgROI = data.roiMetrics.length > 0 
    ? data.roiMetrics.reduce((sum, metric) => sum + metric.roi, 0) / data.roiMetrics.length 
    : 0;

  const activeCampaigns = data.campaigns.filter(c => c.status === 'Active').length;
  const activeInfluencers = data.influencers.filter(i => i.status === 'Active').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Revenue */}
      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            💰 Revenue Generated
          </CardTitle>
          <DollarSign className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            ₹{(totalRevenue / 1000).toFixed(1)}K
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingUp className="h-3 w-3 text-success" />
            <span className="text-success">+12.5%</span>
            <span className="text-muted-foreground">from last month</span>
          </div>
        </CardContent>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </Card>

      {/* Average ROI */}
      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            🚀 Success Rate
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {avgROI.toFixed(1)}%
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingUp className="h-3 w-3 text-success" />
            <span className="text-success">+8.2%</span>
            <span className="text-muted-foreground">from last month</span>
          </div>
        </CardContent>
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent" />
      </Card>

      {/* Total Orders */}
      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            🛍️ Happy Customers
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-chart-3" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {totalOrders}
          </div>
          <div className="flex items-center space-x-1 text-xs">
            <TrendingUp className="h-3 w-3 text-success" />
            <span className="text-success">+15.3%</span>
            <span className="text-muted-foreground">from last month</span>
          </div>
        </CardContent>
        <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 to-transparent" />
      </Card>

      {/* Active Campaigns */}
      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            🎯 Live Campaigns
          </CardTitle>
          <Target className="h-4 w-4 text-chart-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">
            {activeCampaigns}
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <Badge variant="secondary" className="bg-chart-4/10 text-chart-4 border-chart-4/20">
              💫 {activeInfluencers} Amazing Creators
            </Badge>
          </div>
        </CardContent>
        <div className="absolute inset-0 bg-gradient-to-br from-chart-4/5 to-transparent" />
      </Card>
    </div>
  );
};