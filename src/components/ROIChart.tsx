import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ROIMetrics } from '@/types/influencer';

interface ROIChartProps {
  data: ROIMetrics[];
  detailed?: boolean;
}

export const ROIChart = ({ data, detailed = false }: ROIChartProps) => {
  const chartData = data.map((metric, index) => ({
    campaign: `Campaign ${index + 1}`,
    roi: metric.roi,
    roas: metric.roas,
    revenue: metric.totalRevenue / 1000,
    spend: metric.totalSpend / 1000
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ROI & ROAS Analysis</CardTitle>
        <CardDescription>
          Return on Investment and Return on Ad Spend by Campaign
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="campaign" 
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Legend />
              <Bar 
                dataKey="roi" 
                fill="hsl(var(--chart-1))" 
                name="ROI %" 
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="roas" 
                fill="hsl(var(--chart-2))" 
                name="ROAS" 
                radius={[2, 2, 0, 0]}
              />
              {detailed && (
                <>
                  <Bar 
                    dataKey="revenue" 
                    fill="hsl(var(--chart-3))" 
                    name="Revenue (K)" 
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="spend" 
                    fill="hsl(var(--chart-4))" 
                    name="Spend (K)" 
                    radius={[2, 2, 0, 0]}
                  />
                </>
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};