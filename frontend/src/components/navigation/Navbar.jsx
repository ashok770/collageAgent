import { useEffect, useState } from "react";
import { Menu, Search, ShieldCheck, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Home", to: "/", end: true },
  { label: "Solutions", to: "/solutions" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Features", to: "/features" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function NavigationLink({ item, onNavigate, mobile = false }) {
  return (
    <NavLink
      end={item.end}
      onClick={onNavigate}
      to={item.to}
      className={({ isActive }) => [
        "group relative inline-flex items-center font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4",
        mobile ? "rounded-md px-3 py-2.5 text-base" : "px-0.5 py-2 text-sm",
        isActive ? "text-slate-950" : "",
      ].join(" ")}
    >
      {({ isActive }) => (
        <>
          {item.label}
          {!mobile && (
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 bottom-0 h-px origin-left bg-slate-900 transition-transform duration-200 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          )}
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 8);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        hasScrolled
          ? "border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-sm"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-7 lg:px-10">
        <NavLink
          to="/"
          end
          aria-label="AgentVerse home"
          className="group flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm transition-colors duration-200 group-hover:bg-slate-800">
            <ShieldCheck aria-hidden="true" size={21} strokeWidth={1.8} />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block text-[17px] font-semibold tracking-[-0.03em] text-slate-950">AgentVerse</span>
            <span className="mt-1 block truncate text-[10px] font-medium uppercase tracking-[0.11em] text-slate-500 sm:text-[11px]">
              AI Fraud Intelligence Platform
            </span>
          </span>
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {navigationItems.map((item) => <NavigationLink key={item.to} item={item} />)}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Search"
            title="Search"
            className="inline-flex size-10 items-center justify-center rounded-md text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            <Search aria-hidden="true" size={19} strokeWidth={1.8} />
          </button>
          <NavLink
            to="/login"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Get Started
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-md text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 xl:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden border-t border-slate-200 transition-[grid-template-rows,opacity] duration-300 ease-out xl:hidden ${
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile primary navigation" className="mx-auto max-w-[1440px] px-5 py-4 sm:px-7">
            <div className="grid gap-1">
              {navigationItems.map((item) => (
                <NavigationLink key={item.to} item={item} mobile onNavigate={closeMenu} />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200 pt-4 sm:hidden">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={closeMenu}
                className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                Get Started
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
