'use client';
import { useState } from 'react';
import Initialyloader from './initialyloader';
export default function AppContent({ children }) {
  const [showApp, setShowApp] = useState(false);

   if (!showApp) {
        return <Initialyloader onFinish={() => setShowApp(true)} />;
    }

  return children;
}
