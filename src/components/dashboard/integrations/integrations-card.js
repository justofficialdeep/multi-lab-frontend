'use client';
import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

export function IntegrationsCard() {
  return (
      <Card>
        <CardHeader subheader="Manage the Integration" title="Integration card" />
        <Divider />
        <CardContent>
          <div>Card content</div>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save changes</Button>
        </CardActions>
      </Card>
  );
}
