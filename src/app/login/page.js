import React from 'react';
import { config } from '@/config';
import { Layout } from '@/components/auth/layout';
// import SignInMiddleware from './sign-in-middleware';
import { Login } from '@/components/auth/login';

export const metadata = { 
  title: `Sign in | Auth | ${config.site.name}` 
};

export default function Page() {
  return (
    <Layout>
      <Login /> 
    </Layout>
  );
}
