import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { config } from '@/config';
import { IntegrationsCard } from '@/components/dashboard/integrations/integrations-card';

export const metadata = { title: `Settings | Dashboard | ${config.site.name}` }

export default function Page() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Integration</Typography>
      </div>
      <IntegrationsCard />
    </Stack>
  );
}
