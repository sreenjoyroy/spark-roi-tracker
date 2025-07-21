import { DashboardFilters as Filters } from '@/types/influencer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface DashboardFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const DashboardFilters = ({ filters, onFiltersChange }: DashboardFiltersProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const updateFilter = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({});
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const updateDateRange = () => {
    if (startDate && endDate) {
      updateFilter('dateRange', {
        start: format(startDate, 'yyyy-MM-dd'),
        end: format(endDate, 'yyyy-MM-dd')
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {/* Brand Filter */}
      <div className="space-y-2">
        <Label htmlFor="brand">Brand</Label>
        <Select value={filters.brand || ''} onValueChange={(value) => updateFilter('brand', value || undefined)}>
          <SelectTrigger>
            <SelectValue placeholder="All Brands" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Brands</SelectItem>
            <SelectItem value="HealthKart">HealthKart</SelectItem>
            <SelectItem value="Muscletech">Muscletech</SelectItem>
            <SelectItem value="Optimum">Optimum Nutrition</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Filter */}
      <div className="space-y-2">
        <Label htmlFor="product">Product</Label>
        <Select value={filters.product || ''} onValueChange={(value) => updateFilter('product', value || undefined)}>
          <SelectTrigger>
            <SelectValue placeholder="All Products" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Products</SelectItem>
            <SelectItem value="Whey Protein">Whey Protein</SelectItem>
            <SelectItem value="BCAA">BCAA</SelectItem>
            <SelectItem value="Multivitamins">Multivitamins</SelectItem>
            <SelectItem value="Pre-Workout">Pre-Workout</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Platform Filter */}
      <div className="space-y-2">
        <Label htmlFor="platform">Platform</Label>
        <Select value={filters.platform || ''} onValueChange={(value) => updateFilter('platform', value || undefined)}>
          <SelectTrigger>
            <SelectValue placeholder="All Platforms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Platforms</SelectItem>
            <SelectItem value="Instagram">Instagram</SelectItem>
            <SelectItem value="YouTube">YouTube</SelectItem>
            <SelectItem value="TikTok">TikTok</SelectItem>
            <SelectItem value="Twitter">Twitter</SelectItem>
            <SelectItem value="Facebook">Facebook</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Influencer Type Filter */}
      <div className="space-y-2">
        <Label htmlFor="influencerType">Influencer Type</Label>
        <Select value={filters.influencerType || ''} onValueChange={(value) => updateFilter('influencerType', value || undefined)}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Types</SelectItem>
            <SelectItem value="Fitness">Fitness</SelectItem>
            <SelectItem value="Nutrition">Nutrition</SelectItem>
            <SelectItem value="Wellness">Wellness</SelectItem>
            <SelectItem value="Bodybuilding">Bodybuilding</SelectItem>
            <SelectItem value="Lifestyle">Lifestyle</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Date Range */}
      <div className="space-y-2">
        <Label>Start Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !startDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={(date) => {
                setStartDate(date);
                if (date && endDate) updateDateRange();
              }}
              initialFocus
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Clear Filters Button */}
      <div className="space-y-2 flex flex-col justify-end">
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
      </div>
    </div>
  );
};