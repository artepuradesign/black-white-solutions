import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-foreground/80 border-b border-border/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold tracking-wide text-background">
          solução digital
        </NavLink>
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-colors ${isActive ? "text-background" : "text-background/60 hover:text-background"}`
            }
            end
          >
            Início
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-sm transition-colors ${isActive ? "text-background" : "text-background/60 hover:text-background"}`
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
