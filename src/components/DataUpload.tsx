import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FileText, Database, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const DataUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      toast({
        title: "Upload Successful",
        description: `${type} data has been uploaded and processed successfully.`,
      });
    }, 2000);
  };

  const downloadTemplate = (type: string) => {
    // In a real app, this would download actual CSV templates
    toast({
      title: "Template Downloaded",
      description: `${type} template has been downloaded to your computer.`,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="w-5 h-5 mr-2 text-primary" />
            Data Upload & Management
          </CardTitle>
          <CardDescription>
            Upload CSV files for influencers, campaigns, posts, and tracking data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="influencers" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="influencers">Influencers</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="tracking">Tracking</TabsTrigger>
            </TabsList>

            <TabsContent value="influencers" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Upload Influencer Data</h3>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="influencer-file">CSV File</Label>
                      <Input
                        id="influencer-file"
                        type="file"
                        accept=".csv"
                        onChange={(e) => handleFileUpload(e, 'Influencer')}
                        disabled={uploading}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload Influencers'}
                    </Button>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-chart-2" />
                      <h3 className="font-semibold">Download Template</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Download the CSV template with required columns for influencer data.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadTemplate('Influencer')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="campaigns" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Upload Campaign Data</h3>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="campaign-file">CSV File</Label>
                      <Input
                        id="campaign-file"
                        type="file"
                        accept=".csv"
                        onChange={(e) => handleFileUpload(e, 'Campaign')}
                        disabled={uploading}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload Campaigns'}
                    </Button>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-chart-2" />
                      <h3 className="font-semibold">Download Template</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Download the CSV template with required columns for campaign data.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadTemplate('Campaign')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="posts" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Upload Post Data</h3>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="post-file">CSV File</Label>
                      <Input
                        id="post-file"
                        type="file"
                        accept=".csv"
                        onChange={(e) => handleFileUpload(e, 'Post')}
                        disabled={uploading}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload Posts'}
                    </Button>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-chart-2" />
                      <h3 className="font-semibold">Download Template</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Download the CSV template with required columns for post data.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadTemplate('Post')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Upload Tracking Data</h3>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tracking-file">CSV File</Label>
                      <Input
                        id="tracking-file"
                        type="file"
                        accept=".csv"
                        onChange={(e) => handleFileUpload(e, 'Tracking')}
                        disabled={uploading}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload Tracking Data'}
                    </Button>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-chart-2" />
                      <h3 className="font-semibold">Download Template</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Download the CSV template with required columns for tracking data.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadTemplate('Tracking')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Template
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};