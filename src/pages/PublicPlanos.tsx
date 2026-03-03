import React from 'react';
import MenuSuperior from '@/components/MenuSuperior';
import PublicPlansSection from '@/components/sections/PublicPlansSection';
import NewFooter from '@/components/NewFooter';
import PageLayout from '@/components/layout/PageLayout';

const PublicPlanos = () => {
  return (
    <PageLayout
      variant="auth"
      backgroundOpacity="strong"
      showGradients={false}
      className="flex flex-col"
    >
      {/* Sticky Header with transparency */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-background/70 border-b border-border/40">
        <MenuSuperior />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <PublicPlansSection />
        <NewFooter />
      </div>
    </PageLayout>
  );
};

export default PublicPlanos;
