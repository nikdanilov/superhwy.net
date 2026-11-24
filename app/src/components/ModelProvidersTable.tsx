"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  formatInt,
  formatPricePair,
  getLab,
  getProvider,
  type CatalogModel,
} from "@/lib/catalog";
import { ModelIcon, ProviderIcon } from "./BrandIcon";
import { CopyButton } from "./CopyButton";

type Col = "provider" | "modelId" | "context" | "output" | "price";

export function ModelProvidersTable({ model }: { model: CatalogModel }) {
  const [sortCol, setSortCol] = useState<Col>("provider");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const lab = getLab(model.labId);

  const toggle = (c: Col) => {
    if (sortCol === c) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(c);
      setSortDir(c === "provider" || c === "modelId" || c === "price" ? "asc" : "desc");
    }
  };

  const rows = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;
    return [...model.deployments].sort((a, b) => {
      switch (sortCol) {
        case "provider": {
          const pa = getProvider(a.providerId)?.name ?? a.providerId;
          const pb = getProvider(b.providerId)?.name ?? b.providerId;
          return pa.localeCompare(pb) * dir;
        }
        case "modelId":
          return a.providerModelId.localeCompare(b.providerModelId) * dir;
        case "context":
          return (a.context - b.context) * dir;
        case "output":
          return (a.output - b.output) * dir;
        case "price":
          return ((a.costInput ?? 1e9) - (b.costInput ?? 1e9)) * dir;
      }
    });
  }, [model.deployments, sortCol, sortDir]);

  const th = (c: Col, label: string, align: "left" | "right" = "left") => {
    const active = sortCol === c;
    return (
      <th
        scope="col"
        className={`h-11 px-4 sm:px-5 font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a] whitespace-nowrap ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        <button
          type="button"
          onClick={() => toggle(c)}
          className={`inline-flex items-center gap-1 hover:text-[#f4f4f2] transition-colors cursor-pointer ${
            align === "right" ? "flex-row-reverse" : ""
          } ${active ? "text-[#f4f4f2]" : ""}`}
        >
          <span>{label}</span>
          {active && <span className="text-[10px]">{sortDir === "asc" ? "↑" : "↓"}</span>}
        </button>
      </th>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/[0.085]">
            {th("provider", "Provider")}
            <th
              scope="col"
              className="h-11 px-4 sm:px-5 font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a] text-left whitespace-nowrap"
            >
              Lab
            </th>
            {th("modelId", "Model ID")}
            {th("context", "Context", "right")}
            {th("output", "Output", "right")}
            {th("price", "Price", "right")}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.07]">
          {rows.map((d) => {
            const prov = getProvider(d.providerId);
            return (
              <tr key={d.providerId} className="hover:bg-[#0c0d11]/80 transition-colors">
                <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                  <Link
                    href={`/providers/${d.providerId}`}
                    className="inline-flex items-center gap-2 text-[#f4f4f2] group"
                  >
                    <ProviderIcon providerSlug={prov?.iconSlug ?? d.providerId} size={15} />
                    <span className="font-medium underline decoration-white/25 underline-offset-4 group-hover:decoration-white transition-colors">
                      {prov?.name ?? d.providerId}
                    </span>
                  </Link>
                </td>
                <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                  <Link
                    href={`/labs/${model.labId}`}
                    className="inline-flex items-center gap-2 text-[#c8ccd4] group"
                  >
                    <ModelIcon modelSlug={lab?.iconSlug ?? model.slug} size={14} />
                    <span className="underline decoration-white/25 underline-offset-4 group-hover:decoration-white">
                      {lab?.name ?? model.labId}
                    </span>
                  </Link>
                </td>
                <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                  <div className="inline-flex items-center gap-1.5">
                    <code className="font-mono text-xs text-[#f4f4f2]">{d.providerModelId}</code>
                    <CopyButton value={d.providerModelId} label={`Copy ${d.providerModelId}`} />
                  </div>
                </td>
                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                  {d.context > 0 ? formatInt(d.context) : "0"}
                </td>
                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                  {formatInt(d.output)}
                </td>
                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                  {formatPricePair(d.costInput, d.costOutput)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
