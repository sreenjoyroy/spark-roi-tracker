import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { DashboardFilters, ROIMetrics } from '@/types/influencer';
import { generateMockData } from '@/data/mockData';
import { DashboardFilters as FilterComponent } from './DashboardFilters';
import { OverviewCards } from './OverviewCards';
import { ROIChart } from './ROIChart';
import { InfluencerTable } from './InfluencerTable';
import { CampaignPerformance } from './CampaignPerformance';
import { InsightsPanel } from './InsightsPanel';
import { DataUpload } from './DataUpload';
import { ExportTools } from './ExportTools';
import { TrendingUp, Users, Target, DollarSign, BarChart3, FileUp } from 'lucide-react';

export const Dashboard = () => {
  const [filters, setFilters] = useState<DashboardFilters>({});
  const [activeTab, setActiveTab] = useState('overview');
  
  const mockData = generateMockData();
  
  // Filter data based on current filters
  const filteredData = useMemo(() => {
    let filteredInfluencers = mockData.influencers;
    let filteredCampaigns = mockData.campaigns;
    let filteredTracking = mockData.trackingData;
    
    if (filters.platform) {
      filteredInfluencers = filteredInfluencers.filter(inf => inf.platform === filters.platform);
    }
    
    if (filters.brand) {
      filteredCampaigns = filteredCampaigns.filter(camp => camp.brand === filters.brand);
    }
    
    if (filters.product) {
      filteredCampaigns = filteredCampaigns.filter(camp => camp.product === filters.product);
    }
    
    return {
      influencers: filteredInfluencers,
      campaigns: filteredCampaigns,
      tracking: filteredTracking,
      posts: mockData.posts,
      payouts: mockData.payouts,
      roiMetrics: mockData.roiMetrics
    };
  }, [filters, mockData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <div className="border-b bg-card/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">HealthKart ROI Tracker</h1>
                <p className="text-sm text-muted-foreground">Influencer Campaign Analytics Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                <div className="w-2 h-2 bg-success rounded-full mr-2" />
                Live Data
              </Badge>
              <ExportTools data={filteredData} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-6">
        {/* Filters */}
        <Card className="mb-6 shadow-md">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Campaign Filters
            </CardTitle>
            <CardDescription>
              Filter data by brand, product, influencer type, and platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FilterComponent filters={filters} onFiltersChange={setFilters} />
          </CardContent>
        </Card>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Campaigns</span>
            </TabsTrigger>
            <TabsTrigger value="influencers" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Influencers</span>
            </TabsTrigger>
            <TabsTrigger value="roi" className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>ROI Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Insights</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <FileUp className="w-4 h-4" />
              <span>Data Upload</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <OverviewCards data={filteredData} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ROIChart data={filteredData.roiMetrics} />
              <CampaignPerformance campaigns={filteredData.campaigns} />
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <CampaignPerformance campaigns={filteredData.campaigns} detailed />
          </TabsContent>

          <TabsContent value="influencers" className="space-y-6">
            <InfluencerTable influencers={filteredData.influencers} />
          </TabsContent>

          <TabsContent value="roi" className="space-y-6">
            <ROIChart data={filteredData.roiMetrics} detailed />
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <InsightsPanel data={filteredData} />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <DataUpload />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};