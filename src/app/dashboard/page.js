import React from 'react';
import Grid from '@mui/material/Grid';
import { config } from '@/config';
import { Sales } from '@/components/dashboard/overview/sales';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';

export const metadata = {
  title: `Overview | Dashboard | ${config.site.name}`,
};


export default function Page() {
  return (
    <Grid container spacing={3}>

      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>

      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>

      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>

      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid>

      <Grid
        size={{
          lg: 12,
          xs: 12,
        }}
      >
        <Sales sx={{ height: '100%' }} value="$15k" />
      </Grid>

    </Grid>
  );
}
