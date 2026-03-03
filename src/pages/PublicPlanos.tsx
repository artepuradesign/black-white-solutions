import React from 'react';
import MenuSuperior from '@/components/MenuSuperior';
import PublicPlansSection from '@/components/sections/PublicPlansSection';
import NewFooter from '@/components/NewFooter';
import { useSiteTheme } from '@/contexts/SiteThemeContext';

const PublicPlanos = () => {
  const { currentVisualTheme } = useSiteTheme();
  const isMatrix = currentVisualTheme === 'matrix';

  return (
    <div className="h-screen flex flex-col relative overflow-hidden bg-transparent">
      {/* Animated Background - hidden in matrix theme via CSS */}
      {!isMatrix && (
        <div className="absolute inset-0 bg-transparent planos-publicos-bg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      )}
      
      {/* Fixed Header */}
      <div className="relative z-20 flex-shrink-0">
        <MenuSuperior />
      </div>
      
      {/* Scrollable Content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <PublicPlansSection />
        <NewFooter />
      </div>
    </div>
  );
};

export default PublicPlanos;
