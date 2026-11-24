"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { CommandSearch } from "./CommandSearch";
import { HowToUseModal } from "./HowToUseModal";

const NAV_ITEMS = [
  { href: "/", label: "Models", match: (p: string) => p === "/" || p.startsWith("/models") },
  { href: "/providers", label: "Providers", match: (p: string) => p.startsWith("/providers") },
  { href: "/labs", label: "Labs", match: (p: string) => p.startsWith("/labs") },
];

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setHelpOpen(false);
        setSearchOpen((v) => !v);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setHelpOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 h-14 border-b border-white/[0.085] bg-[#060608]/95 backdrop-blur-md">
        <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Left: Brand Lockup / Inline Tagline */}
          <div className="flex items-center gap-2.5 min-w-0">
            <Link href="/" className="inline-flex items-center shrink-0 group">
              <span className="font-display text-[17px] font-semibold tracking-[-0.035em] leading-none text-[#f4f4f2] group-hover:text-white transition-colors">
                superhwy.net
              </span>
            </Link>
            <span className="text-white/20 hidden md:inline select-none">/</span>
            <span className="text-[13px] text-[#717682] truncate hidden md:inline">
              An open-source database of Superintelligence
            </span>
          </div>

          {/* Right: Models · Providers · Labs · GitHub · Search (⌘K) · How to use */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <nav aria-label="Primary" className="flex items-center gap-0.5 sm:gap-1 mr-1">
              {NAV_ITEMS.map((item) => {
                const active = item.match(pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      active
                        ? "bg-[#12141a] text-[#f4f4f2] border border-white/[0.1]"
                        : "text-[#8b909a] hover:text-[#f4f4f2] border border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <a
              href="https://github.com/nikdanilov/superhwy.net"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              title="GitHub"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#8b909a] hover:text-[#f4f4f2] hover:bg-white/[0.06] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.64 3.01 8.57 7.18 9.96.53.1.72-.23.72-.51 0-.25-.01-1.08-.01-1.96-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.53-1.17-1.53-.95-.65.07-.64.07-.64 1.05.07 1.61 1.08 1.61 1.08.94 1.61 2.46 1.14 3.06.87.09-.68.37-1.14.67-1.4-2.33-.26-4.78-1.17-4.78-5.19 0-1.15.41-2.09 1.08-2.82-.11-.26-.47-1.33.1-2.78 0 0 .88-.28 2.89 1.08a10.1 10.1 0 0 1 2.63-.35c.89 0 1.79.12 2.63.35 2.01-1.36 2.89-1.08 2.89-1.08.57 1.45.21 2.52.1 2.78.67.73 1.08 1.67 1.08 2.82 0 4.03-2.46 4.92-4.8 5.18.38.33.71.97.71 1.96 0 1.42-.01 2.56-.01 2.91 0 .28.19.62.73.51A10.51 10.51 0 0 0 22.5 12c0-5.8-4.7-10.5-10.5-10.5Z" />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => {
                setHelpOpen(false);
                setSearchOpen(true);
              }}
              aria-keyshortcuts="Control+K Meta+K"
              className="inline-flex items-center justify-between gap-4 h-8 px-2.5 sm:w-44 rounded-lg bg-[#0c0d11] hover:bg-[#12141a] border border-white/[0.09] text-xs text-[#8b909a] hover:text-[#f4f4f2] transition-colors cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-[#717682]" />
                <span className="hidden sm:inline">Search</span>
              </span>
              <kbd className="hidden sm:inline font-mono text-[10px] text-[#717682]">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => {
                setSearchOpen(false);
                setHelpOpen(true);
              }}
              className="h-8 px-3 rounded-lg text-xs font-semibold bg-[#f4f4f2] text-[#060608] hover:bg-white transition-colors cursor-pointer"
            >
              How to use
            </button>
          </div>
        </div>
      </header>

      <CommandSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <HowToUseModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
}
