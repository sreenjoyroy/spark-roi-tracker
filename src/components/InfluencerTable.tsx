import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Influencer } from '@/types/influencer';
import { Users, Instagram, Youtube, Twitter } from 'lucide-react';

interface InfluencerTableProps {
  influencers: Influencer[];
}

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'Instagram':
      return <Instagram className="w-4 h-4" />;
    case 'YouTube':
      return <Youtube className="w-4 h-4" />;
    case 'Twitter':
      return <Twitter className="w-4 h-4" />;
    default:
      return <Users className="w-4 h-4" />;
  }
};

const formatFollowerCount = (count: number) => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}K`;
  }
  return count.toString();
};

export const InfluencerTable = ({ influencers }: InfluencerTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="w-5 h-5 mr-2 text-primary" />
          Influencer Performance
        </CardTitle>
        <CardDescription>
          Overview of all influencers and their key metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Influencer</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Followers</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {influencers.map((influencer) => (
                <TableRow key={influencer.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {influencer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{influencer.name}</div>
                        <div className="text-sm text-muted-foreground">{influencer.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                      {influencer.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getPlatformIcon(influencer.platform)}
                      <span>{influencer.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {formatFollowerCount(influencer.followerCount)}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={influencer.status === 'Active' ? 'default' : 'secondary'}
                      className={
                        influencer.status === 'Active' 
                          ? 'bg-success/10 text-success border-success/20' 
                          : 'bg-muted text-muted-foreground'
                      }
                    >
                      {influencer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(influencer.joinDate).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};