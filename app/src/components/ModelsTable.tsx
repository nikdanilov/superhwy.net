"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  formatInt,
  formatPricePair,
  getLab,
  type CatalogModel,
} from "@/lib/catalog";
import { ModelIcon } from "./BrandIcon";
import { ModalityIcons } from "./ModalityIcons";

type SortColumn =
  | "name"
  | "lab"
  | "providers"
  | "context"
  | "output"
  | "input"
  | "weights"
  | "price"
  | "releaseDate"
  | "updatedDate";

type SortDir = "asc" | "desc";

export function ModelsTable({ models }: { models: CatalogModel[] }) {
  const [sortCol, setSortCol] = useState<SortColumn>("updatedDate");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (col: SortColumn) => {
    if (sortCol === col) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortCol(col);
      setSortDir(col === "name" || col === "lab" || col === "price" ? "asc" : "desc");
    }
  };

  const sorted = useMemo(() => {
    const dir = sortDir === "asc" ? 1 : -1;
    return [...models].sort((a, b) => {
      switch (sortCol) {
        case "name":
          return a.name.localeCompare(b.name) * dir;
        case "lab": {
          const la = getLab(a.labId)?.name ?? a.labId;
          const lb = getLab(b.labId)?.name ?? b.labId;
          return la.localeCompare(lb) * dir;
        }
        case "providers":
          return (a.deployments.length - b.deployments.length) * dir;
        case "context":
          return (a.context - b.context) * dir;
        case "output":
          return (a.output - b.output) * dir;
        case "input":
          return (a.inputModalities.length - b.inputModalities.length) * dir;
        case "weights":
          return a.weights.localeCompare(b.weights) * dir;
        case "price": {
          const pa = a.costInput ?? Number.POSITIVE_INFINITY;
          const pb = b.costInput ?? Number.POSITIVE_INFINITY;
          return (pa - pb) * dir;
        }
        case "releaseDate":
          return a.releaseDate.localeCompare(b.releaseDate) * dir;
        case "updatedDate":
        default:
          return a.updatedDate.localeCompare(b.updatedDate) * dir;
      }
    });
  }, [models, sortCol, sortDir]);

  const thButton = (
    col: SortColumn,
    label: string,
    align: "left" | "right" = "left",
    extraClass = ""
  ) => {
    const active = sortCol === col;
    return (
      <th
        scope="col"
        aria-sort={active ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
        className={`h-12 px-4 sm:px-5 font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a] whitespace-nowrap select-none ${
          align === "right" ? "text-right" : "text-left"
        } ${extraClass}`}
      >
        <button
          type="button"
          onClick={() => handleSort(col)}
          className={`inline-flex items-center gap-1 hover:text-[#f4f4f2] transition-colors cursor-pointer ${
            align === "right" ? "flex-row-reverse" : ""
          } ${active ? "text-[#f4f4f2]" : ""}`}
        >
          <span>{label}</span>
          {active && (
            <span className="text-[10px] text-[#f4f4f2]">
              {sortDir === "asc" ? "↑" : "↓"}
            </span>
          )}
        </button>
      </th>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/[0.085]">
            {thButton("name", "Model", "left")}
            {thButton("lab", "Lab", "left")}
            {thButton("providers", "Providers", "right")}
            {thButton("context", "Context", "right")}
            {thButton("output", "Output", "right")}
            {thButton("input", "Input", "left")}
            {thButton("weights", "Weights", "left")}
            {thButton("price", "Price", "right")}
            {thButton("releaseDate", "Release", "left")}
            {thButton("updatedDate", "Updated", "left")}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.07]">
          {sorted.map((m) => {
            const lab = getLab(m.labId);
            return (
              <tr key={m.id} className="hover:bg-[#0c0d11]/80 transition-colors">
                <th
                  scope="row"
                  className="py-4 px-4 sm:px-5 text-left font-normal whitespace-nowrap min-w-[240px]"
                >
                  <Link
                    href={`/models/${m.slug}`}
                    className="font-display text-[14.5px] font-semibold text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white transition-colors"
                  >
                    {m.name}
                  </Link>
                  <div className="font-mono text-xs text-[#717682] mt-1">{m.id}</div>
                </th>

                <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                  <Link
                    href={`/labs/${m.labId}`}
                    className="inline-flex items-center gap-2 text-[#f4f4f2] group"
                  >
                    <ModelIcon modelSlug={lab?.iconSlug ?? m.slug} size={15} />
                    <span className="text-[13.5px] underline decoration-white/25 underline-offset-4 group-hover:decoration-white transition-colors">
                      {lab?.name ?? m.labId}
                    </span>
                  </Link>
                </td>

                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] tabular-nums">
                  <Link
                    href={`/models/${m.slug}#providers`}
                    className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white transition-colors"
                  >
                    {m.deployments.length}
                  </Link>
                </td>

                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                  {m.context > 0 ? formatInt(m.context) : "0"}
                </td>

                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                  {formatInt(m.output)}
                </td>

                <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                  <ModalityIcons modalities={m.inputModalities} />
                </td>

                <td className="py-4 px-4 sm:px-5 whitespace-nowrap text-[13px]">
                  {m.weights === "open" && m.hfRepo ? (
                    <a
                      href={`https://huggingface.co/${m.hfRepo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white transition-colors"
                    >
                      Open
                    </a>
                  ) : (
                    <span className="text-[#8b909a]">Closed</span>
                  )}
                </td>

                <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                  {formatPricePair(m.costInput, m.costOutput)}
                </td>

                <td className="py-4 px-4 sm:px-5 whitespace-nowrap font-mono text-[13px] text-[#8b909a] tabular-nums">
                  {m.releaseDate}
                </td>

                <td className="py-4 px-4 sm:px-5 whitespace-nowrap font-mono text-[13px] text-[#8b909a] tabular-nums">
                  {m.updatedDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
