import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, Loader2 } from 'lucide-react';

interface Certification {
  id: string;
  certificate_id: string;
  recipient_name: string;
  course_name: string;
  issue_date: string;
  expiry_date: string | null;
  status: string;
  is_active: boolean;
}

const CertificationsAdmin = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCert, setEditingCert] = useState<Certification | null>(null);
  const [formData, setFormData] = useState({
    certificate_id: '',
    recipient_name: '',
    course_name: '',
    issue_date: '',
    expiry_date: '',
    status: 'active',
    is_active: true,
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: certifications, isLoading } = useQuery({
    queryKey: ['admin-certifications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('certifications')
        .select('*')
        .order('issue_date', { ascending: false });
      if (error) throw error;
      return data as Certification[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: Omit<Certification, 'id'>) => {
      const { error } = await supabase.from('certifications').insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-certifications'] });
      toast({ title: 'Certification created successfully' });
      resetForm();
    },
    onError: (error) => {
      toast({ title: 'Error creating certification', description: error.message, variant: 'destructive' });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: Certification) => {
      const { error } = await supabase.from('certifications').update(data).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-certifications'] });
      toast({ title: 'Certification updated successfully' });
      resetForm();
    },
    onError: (error) => {
      toast({ title: 'Error updating certification', description: error.message, variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('certifications').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-certifications'] });
      toast({ title: 'Certification deleted successfully' });
    },
    onError: (error) => {
      toast({ title: 'Error deleting certification', description: error.message, variant: 'destructive' });
    },
  });

  const resetForm = () => {
    setFormData({ certificate_id: '', recipient_name: '', course_name: '', issue_date: '', expiry_date: '', status: 'active', is_active: true });
    setEditingCert(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (cert: Certification) => {
    setEditingCert(cert);
    setFormData({
      certificate_id: cert.certificate_id,
      recipient_name: cert.recipient_name,
      course_name: cert.course_name,
      issue_date: cert.issue_date,
      expiry_date: cert.expiry_date || '',
      status: cert.status,
      is_active: cert.is_active,
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      certificate_id: formData.certificate_id,
      recipient_name: formData.recipient_name,
      course_name: formData.course_name,
      issue_date: formData.issue_date,
      expiry_date: formData.expiry_date || null,
      status: formData.status,
      is_active: formData.is_active,
    };

    if (editingCert) {
      updateMutation.mutate({ id: editingCert.id, ...data });
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
        <CardTitle>Certifications</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => { resetForm(); setIsDialogOpen(true); }} className="gap-2">
              <Plus className="h-4 w-4" /> Add Certification
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingCert ? 'Edit Certification' : 'Add Certification'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Certificate ID</Label>
                <Input value={formData.certificate_id} onChange={(e) => setFormData({ ...formData, certificate_id: e.target.value })} required placeholder="e.g., CERT-2024-001" />
              </div>
              <div className="space-y-2">
                <Label>Recipient Name</Label>
                <Input value={formData.recipient_name} onChange={(e) => setFormData({ ...formData, recipient_name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Course Name</Label>
                <Input value={formData.course_name} onChange={(e) => setFormData({ ...formData, course_name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Issue Date</Label>
                <Input type="date" value={formData.issue_date} onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Expiry Date (Optional)</Label>
                <Input type="date" value={formData.expiry_date} onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="revoked">Revoked</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={formData.is_active} onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })} />
                <Label>Active</Label>
              </div>
              <Button type="submit" className="w-full" disabled={createMutation.isPending || updateMutation.isPending}>
                {(createMutation.isPending || updateMutation.isPending) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {editingCert ? 'Update' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certifications?.map((cert) => (
            <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{cert.recipient_name}</h3>
                <p className="text-sm text-muted-foreground">{cert.course_name}</p>
                <p className="text-xs text-muted-foreground">ID: {cert.certificate_id}</p>
                <div className="flex gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    cert.status === 'active' ? 'bg-green-100 text-green-700' : 
                    cert.status === 'expired' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-red-100 text-red-700'
                  }`}>
                    {cert.status}
                  </span>
                  <span className={`text-xs ${cert.is_active ? 'text-green-600' : 'text-red-600'}`}>
                    {cert.is_active ? 'Visible' : 'Hidden'}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(cert)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => deleteMutation.mutate(cert.id)} disabled={deleteMutation.isPending}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
          {certifications?.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No certifications yet. Add your first certification!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationsAdmin;
