import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Download, FileText, FileSpreadsheet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExportToolsProps {
  data: any;
}

export const ExportTools = ({ data }: ExportToolsProps) => {
  const { toast } = useToast();

  const exportToCSV = (dataType: string) => {
    // In a real app, this would generate and download actual CSV files
    toast({
      title: "Export Successful",
      description: `${dataType} data has been exported to CSV format.`,
    });
  };

  const exportToPDF = () => {
    // In a real app, this would generate and download a PDF report
    toast({
      title: "Export Successful",
      description: "Insights report has been exported to PDF format.",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => exportToCSV('Influencers')}>
          <FileSpreadsheet className="w-4 h-4 mr-2" />
          Export Influencers CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportToCSV('Campaigns')}>
          <FileSpreadsheet className="w-4 h-4 mr-2" />
          Export Campaigns CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportToCSV('ROI Metrics')}>
          <FileSpreadsheet className="w-4 h-4 mr-2" />
          Export ROI Data CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => exportToPDF()}>
          <FileText className="w-4 h-4 mr-2" />
          Export Insights PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};