import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Star, AlertTriangle, Users, Target } from 'lucide-react';

interface InsightsPanelProps {
  data: {
    influencers: any[];
    campaigns: any[];
    tracking: any[];
    roiMetrics: any[];
  };
}

export const InsightsPanel = ({ data }: InsightsPanelProps) => {
  // Calculate insights
  const topInfluencers = data.influencers
    .filter(inf => inf.status === 'Active')
    .sort((a, b) => b.followerCount - a.followerCount)
    .slice(0, 3);

  const bestROICampaign = data.roiMetrics.reduce((best, current) => 
    current.roi > (best?.roi || 0) ? current : best, null);

  const poorROICampaigns = data.roiMetrics.filter(metric => metric.roi < 100);

  const platformDistribution = data.influencers.reduce((acc, inf) => {
    acc[inf.platform] = (acc[inf.platform] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const avgConversionRate = data.tracking.length > 0 
    ? data.tracking.reduce((sum, track) => sum + track.conversionRate, 0) / data.tracking.length 
    : 0;

  return (
    <div className="space-y-6">
      {/* Key Insights Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Avg Conversion</p>
              <p className="text-2xl font-bold">{avgConversionRate.toFixed(1)}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-success" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Campaigns</p>
              <p className="text-2xl font-bold">{data.campaigns.filter(c => c.status === 'Active').length}</p>
            </div>
            <Target className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Influencers</p>
              <p className="text-2xl font-bold">{data.influencers.length}</p>
            </div>
            <Users className="w-8 h-8 text-chart-2" />
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Poor ROI Campaigns</p>
              <p className="text-2xl font-bold">{poorROICampaigns.length}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-warning" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Influencers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-primary" />
              Top Performing Influencers
            </CardTitle>
            <CardDescription>
              Influencers with highest follower engagement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topInfluencers.map((influencer, index) => (
              <div key={influencer.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{influencer.name}</div>
                    <div className="text-sm text-muted-foreground">{influencer.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{(influencer.followerCount / 1000).toFixed(0)}K</div>
                  <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 border-chart-1/20">
                    {influencer.platform}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Platform Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary" />
              Platform Distribution
            </CardTitle>
            <CardDescription>
              Influencer distribution across platforms
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(platformDistribution).map(([platform, count]) => {
              const percentage = ((count as number) / data.influencers.length) * 100;
              return (
                <div key={platform} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{platform}</span>
                    <span className="text-muted-foreground">{count as number} influencers</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Best ROI Campaign */}
        {bestROICampaign && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-success" />
                Best Performing Campaign
              </CardTitle>
              <CardDescription>
                Campaign with highest ROI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">ROI</span>
                  <span className="text-lg font-bold text-success">{bestROICampaign.roi.toFixed(1)}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">ROAS</span>
                  <span className="text-lg font-bold">{bestROICampaign.roas.toFixed(1)}x</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <span className="text-lg font-bold">₹{(bestROICampaign.totalRevenue / 1000).toFixed(0)}K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Orders</span>
                  <span className="text-lg font-bold">{bestROICampaign.orders}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Poor ROI Alerts */}
        {poorROICampaigns.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
                Campaigns Needing Attention
              </CardTitle>
              <CardDescription>
                Campaigns with ROI below 100%
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {poorROICampaigns.map((campaign, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-warning/20 bg-warning/5">
                  <div>
                    <div className="font-medium">Campaign {index + 1}</div>
                    <div className="text-sm text-muted-foreground">
                      ₹{(campaign.totalSpend / 1000).toFixed(0)}K spent
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-warning">{campaign.roi.toFixed(1)}%</div>
                    <div className="text-sm text-muted-foreground">ROI</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};