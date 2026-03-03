import React from "react";
import TopBar from "./TopBar";

interface PageShellProps {
  children: React.ReactNode;
}

const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-foreground text-background">
      <TopBar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default PageShell;
