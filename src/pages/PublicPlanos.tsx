import React from 'react';
import MenuSuperior from '@/components/MenuSuperior';
import PublicPlansSection from '@/components/sections/PublicPlansSection';
import NewFooter from '@/components/NewFooter';
import { useSiteTheme } from '@/contexts/SiteThemeContext';

const PublicPlanos = () => {
  const { currentVisualTheme } = useSiteTheme();
  const isMatrix = currentVisualTheme === 'matrix';

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated Background - always visible */}
      <div className="fixed inset-0 z-0">
        {isMatrix ? (
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,0,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,200,0,0.06),transparent_50%)]" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-32 right-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 planos-publicos-bg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
        )}
      </div>
      
      {/* Sticky Header with transparency */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-border/40">
        <MenuSuperior />
      </div>
      
      {/* Scrollable Content */}
      <div className="relative z-10 flex-1">
        <PublicPlansSection />
        <NewFooter />
      </div>
    </div>
  );
};

export default PublicPlanos;
