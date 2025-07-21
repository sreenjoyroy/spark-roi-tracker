import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Campaign } from '@/types/influencer';
import { Target, Calendar, DollarSign, TrendingUp } from 'lucide-react';

interface CampaignPerformanceProps {
  campaigns: Campaign[];
  detailed?: boolean;
}

export const CampaignPerformance = ({ campaigns, detailed = false }: CampaignPerformanceProps) => {
  const formatCurrency = (amount: number) => {
    return `₹${(amount / 1000).toFixed(0)}K`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-success/10 text-success border-success/20';
      case 'Completed':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Planned':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const calculateProgress = (startDate: string, endDate: string) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    
    if (now < start) return 0;
    if (now > end) return 100;
    
    return Math.round(((now - start) / (end - start)) * 100);
  };

  if (detailed) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Campaign Performance Details
            </CardTitle>
            <CardDescription>
              Detailed view of all campaigns and their performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{campaign.name}</h3>
                      <p className="text-sm text-muted-foreground">{campaign.objective}</p>
                    </div>
                    <Badge className={getStatusColor(campaign.status)}>
                      {campaign.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Budget
                      </div>
                      <div className="text-xl font-bold">{formatCurrency(campaign.budget)}</div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        Duration
                      </div>
                      <div className="text-sm">
                        {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Progress
                      </div>
                      <div className="space-y-1">
                        <Progress value={calculateProgress(campaign.startDate, campaign.endDate)} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          {calculateProgress(campaign.startDate, campaign.endDate)}% complete
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Product</div>
                      <div className="font-medium">{campaign.product}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Brand</div>
                      <div className="font-medium">{campaign.brand}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Target className="w-5 h-5 mr-2 text-primary" />
          Active Campaigns
        </CardTitle>
        <CardDescription>
          Overview of current campaign performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.slice(0, 5).map((campaign) => (
            <div key={campaign.id} className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{campaign.name}</h4>
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{campaign.product}</span>
                  <span>•</span>
                  <span>{formatCurrency(campaign.budget)}</span>
                </div>
                <div className="mt-2">
                  <Progress 
                    value={calculateProgress(campaign.startDate, campaign.endDate)} 
                    className="h-1.5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};