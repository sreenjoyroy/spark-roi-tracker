import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Users2, Calendar } from 'lucide-react';

export const WelcomeSection = () => {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good morning' : currentTime < 18 ? 'Good afternoon' : 'Good evening';
  
  return (
    <Card className="mb-6 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 border-primary/20">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {greeting}! 👋
              </h2>
              <p className="text-muted-foreground">
                Welcome back to your influencer dashboard. Your community is growing stronger every day!
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-xs text-muted-foreground">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">₹62K</div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-3">8.1x</div>
              <div className="text-xs text-muted-foreground">Avg ROAS</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const SuccessStories = () => {
  const stories = [
    {
      influencer: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      quote: "Working with HealthKart has been incredible! My community loves the authentic product recommendations, and I'm proud to share products I genuinely use every day.",
      achievement: "245K engaged followers",
      platform: "Instagram"
    },
    {
      influencer: "Rohit Mehta",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "The partnership feels like a natural fit. My audience trusts my nutrition advice, and HealthKart's quality products make it easy to deliver value.",
      achievement: "180K YouTube subscribers",
      platform: "YouTube"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users2 className="w-5 h-5 mr-2 text-primary" />
          Success Stories
        </CardTitle>
        <CardDescription>
          Real stories from our amazing influencer partners
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {stories.map((story, index) => (
          <div key={index} className="bg-muted/30 rounded-lg p-4 border border-muted/50">
            <div className="flex items-start space-x-4">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarImage src={story.avatar} alt={story.influencer} />
                <AvatarFallback>{story.influencer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{story.influencer}</h4>
                  <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 border-chart-1/20">
                    {story.platform}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "{story.quote}"
                </p>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Users2 className="w-3 h-3" />
                  <span>{story.achievement}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export const CommunityHighlights = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-primary" />
          Community Highlights
        </CardTitle>
        <CardDescription>
          Recent achievements and milestones from our family
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg border border-success/20">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <div className="flex-1">
            <p className="text-sm font-medium">Priya just hit 250K followers! 🎉</p>
            <p className="text-xs text-muted-foreground">2 hours ago</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-chart-3/10 rounded-lg border border-chart-3/20">
          <div className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" />
          <div className="flex-1">
            <p className="text-sm font-medium">Summer Campaign exceeded 800% ROI target</p>
            <p className="text-xs text-muted-foreground">Yesterday</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="flex-1">
            <p className="text-sm font-medium">Arjun's video reached 1M+ views organically</p>
            <p className="text-xs text-muted-foreground">3 days ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};