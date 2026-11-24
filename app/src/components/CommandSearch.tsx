"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  formatInt,
  formatPricePair,
  getLab,
  getModelsByLab,
  getModelsByProvider,
  LABS,
  MODELS,
  PROVIDERS,
} from "@/lib/catalog";
import { ModelIcon, ProviderIcon } from "./BrandIcon";

interface SearchHit {
  key: string;
  kind: "MODEL" | "PROVIDER" | "LAB";
  title: string;
  id: string;
  href: string;
  iconType: "model" | "provider";
  iconSlug: string;
  meta: string[];
}

export function CommandSearch({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const allItems = useMemo<SearchHit[]>(() => {
    const modelHits: SearchHit[] = MODELS.map((m) => {
      const lab = getLab(m.labId);
      const meta: string[] = [];
      if (lab) meta.push(lab.name);
      meta.push(`${m.deployments.length} ${m.deployments.length === 1 ? "provider" : "providers"}`);
      if (m.context > 0) meta.push(`${formatInt(m.context)} ctx`);
      const price = formatPricePair(m.costInput, m.costOutput);
      if (price !== "-") meta.push(price);
      meta.push(m.updatedDate);

      return {
        key: `model:${m.id}`,
        kind: "MODEL",
        title: m.name,
        id: m.id,
        href: `/models/${m.slug}`,
        iconType: "model",
        iconSlug: lab?.iconSlug ?? m.slug,
        meta,
      };
    });

    const providerHits: SearchHit[] = PROVIDERS.map((p) => {
      const count = getModelsByProvider(p.id).length;
      return {
        key: `provider:${p.id}`,
        kind: "PROVIDER",
        title: p.name,
        id: p.id,
        href: `/providers/${p.id}`,
        iconType: "provider",
        iconSlug: p.iconSlug,
        meta: [`${count} ${count === 1 ? "model" : "models"}`, p.npm],
      };
    });

    const labHits: SearchHit[] = LABS.map((l) => {
      const count = getModelsByLab(l.id).length;
      return {
        key: `lab:${l.id}`,
        kind: "LAB",
        title: l.name,
        id: l.id,
        href: `/labs/${l.id}`,
        iconType: "model",
        iconSlug: l.iconSlug,
        meta: [`${count} ${count === 1 ? "model" : "models"}`],
      };
    });

    return [...modelHits, ...providerHits, ...labHits];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems.slice(0, 12);
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.meta.some((m) => m.toLowerCase().includes(q))
    );
  }, [allItems, query]);

  const safeIdx = Math.min(activeIdx, Math.max(0, results.length - 1));

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  if (!open) return null;

  const navigate = (href: string) => {
    onClose();
    setQuery("");
    setActiveIdx(0);
    router.push(href);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search models, providers, and labs"
        className="w-full max-w-2xl rounded-xl bg-[#0c0d11] border border-white/[0.12] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 h-12 border-b border-white/[0.08]">
          <Search className="w-4 h-4 text-[#717682] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIdx(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                onClose();
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIdx((i) => Math.min(results.length - 1, i + 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIdx((i) => Math.max(0, i - 1));
              } else if (e.key === "Enter" && results[safeIdx]) {
                e.preventDefault();
                navigate(results[safeIdx].href);
              }
            }}
            placeholder="Search models, providers, and labs"
            className="flex-1 bg-transparent text-sm text-[#f4f4f2] placeholder:text-[#717682] focus:outline-none"
          />
          <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.09] font-mono text-[10px] text-[#8b909a]">
            Esc
          </kbd>
        </div>

        <div className="px-4 py-2 border-b border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#717682]">
          <span>
            {query.trim()
              ? `${results.length} ${results.length === 1 ? "result" : "results"}`
              : "Recently updated models, providers, and labs"}
          </span>
          <span className="hidden sm:inline">↑↓ navigate · ↵ open</span>
        </div>

        <div className="max-h-[420px] overflow-y-auto divide-y divide-white/[0.05]">
          {results.length === 0 ? (
            <div className="py-10 text-center text-xs font-mono text-[#8b909a]">
              No matches for &ldquo;{query}&rdquo;
            </div>
          ) : (
            results.map((item, idx) => {
              const active = idx === safeIdx;
              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => navigate(item.href)}
                  className={`w-full px-4 py-3 text-left flex items-start justify-between gap-3 transition-colors cursor-pointer ${
                    active ? "bg-[#12141a]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="mt-0.5 shrink-0">
                      {item.iconType === "provider" ? (
                        <ProviderIcon providerSlug={item.iconSlug} size={16} />
                      ) : (
                        <ModelIcon modelSlug={item.iconSlug} size={16} />
                      )}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#f4f4f2] truncate">
                          {item.title}
                        </span>
                        <span className="font-mono text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.06] text-[#8b909a]">
                          {item.kind}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-[#717682] truncate mt-0.5">
                        {item.id}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#8b909a] shrink-0 tabular-nums mt-0.5">
                    {item.meta.slice(0, 3).map((chip, cIdx) => (
                      <span key={cIdx} className="whitespace-nowrap">
                        {cIdx > 0 && <span className="text-white/15 mr-2">·</span>}
                        {chip}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
