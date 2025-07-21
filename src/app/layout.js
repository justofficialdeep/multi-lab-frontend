import React from 'react';
import '@/styles/global.css';
import '@/styles/sn.scss';
import AppContent from './app-content';

import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocalizationProvider>
          <ThemeProvider>
              <AppContent>
                {children}
              </AppContent>
            </ThemeProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
