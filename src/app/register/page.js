import React from 'react';
import { config } from '@/config';
import { Layout } from '@/components/auth/layout';
// import SignInMiddleware from './sign-in-middleware';
import { Register } from '@/components/auth/register';

export const metadata = { 
  title: `Sign in | Auth | ${config.site.name}` 
};

export default function Page() {
  return (
    <Layout>
      <Register /> 
    </Layout>
  );
}
