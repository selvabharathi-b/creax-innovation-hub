import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';

interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
}

const StatsAdmin = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStat, setEditingStat] = useState<Stat | null>(null);
  const [formData, setFormData] = useState({
    label: '',
    value: '',
    icon: 'TrendingUp',
    description: '',
    display_order: 0,
    is_active: true,
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stats')
        .select('*')
        .order('display_order');
      if (error) throw error;
      return data as Stat[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: Omit<Stat, 'id'>) => {
      const { error } = await supabase.from('stats').insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast({ title: 'Stat created successfully' });
      resetForm();
    },
    onError: (error) => {
      toast({ title: 'Error creating stat', description: error.message, variant: 'destructive' });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: Stat) => {
      const { error } = await supabase.from('stats').update(data).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast({ title: 'Stat updated successfully' });
      resetForm();
    },
    onError: (error) => {
      toast({ title: 'Error updating stat', description: error.message, variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('stats').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-stats'] });
      toast({ title: 'Stat deleted successfully' });
    },
    onError: (error) => {
      toast({ title: 'Error deleting stat', description: error.message, variant: 'destructive' });
    },
  });

  const resetForm = () => {
    setFormData({ label: '', value: '', icon: 'TrendingUp', description: '', display_order: 0, is_active: true });
    setEditingStat(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (stat: Stat) => {
    setEditingStat(stat);
    setFormData({
      label: stat.label,
      value: stat.value,
      icon: stat.icon,
      description: stat.description || '',
      display_order: stat.display_order,
      is_active: stat.is_active,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      label: formData.label,
      value: formData.value,
      icon: formData.icon,
      description: formData.description || null,
      display_order: formData.display_order,
      is_active: formData.is_active,
    };

    if (editingStat) {
      updateMutation.mutate({ id: editingStat.id, ...data });
    } else {
      createMutation.mutate(data);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Statistics</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }} className="gap-2">
              <Plus className="h-4 w-4" /> Add Stat
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{editingStat ? 'Edit Stat' : 'Add Stat'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Label</Label>
                <Input value={formData.label} onChange={(e) => setFormData({ ...formData, label: e.target.value })} required placeholder="e.g., Projects Completed" />
              </div>
              <div className="space-y-2">
                <Label>Value</Label>
                <Input value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} required placeholder="e.g., 150+" />
              </div>
              <div className="space-y-2">
                <Label>Icon (Lucide icon name)</Label>
                <Input value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })} placeholder="e.g., TrendingUp, Users, Award" />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Input value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Optional description" />
              </div>
              <div className="space-y-2">
                <Label>Display Order</Label>
                <Input type="number" value={formData.display_order} onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={formData.is_active} onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })} />
                <Label>Active</Label>
              </div>
              <Button type="submit" className="w-full" disabled={createMutation.isPending || updateMutation.isPending}>
                {(createMutation.isPending || updateMutation.isPending) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {editingStat ? 'Update' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {stats?.map((stat) => (
            <div key={stat.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{stat.label}</h3>
                <p className="text-sm text-primary font-bold">{stat.value}</p>
                <span className={`text-xs ${stat.is_active ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(stat)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => deleteMutation.mutate(stat.id)} disabled={deleteMutation.isPending}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
          {stats?.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No stats yet. Add your first stat!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsAdmin;
