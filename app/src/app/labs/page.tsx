import Link from "next/link";
import { getModelsByLab, LABS } from "@/lib/catalog";
import { ModelIcon } from "@/components/BrandIcon";

export default function LabsPage() {
  const rows = LABS.map((lab) => {
    const models = getModelsByLab(lab.id);
    const providerIds = new Set(models.flatMap((m) => m.deployments.map((d) => d.providerId)));
    const lastUpdated =
      models.map((m) => m.updatedDate).sort().reverse()[0] ?? "-";
    return {
      lab,
      modelCount: models.length,
      providerCount: providerIds.size,
      lastUpdated,
    };
  }).sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/[0.085]">
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Lab
            </th>
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Description
            </th>
            <th className="h-12 px-4 sm:px-5 text-right font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Models
            </th>
            <th className="h-12 px-4 sm:px-5 text-right font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Providers
            </th>
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.07]">
          {rows.map(({ lab, modelCount, providerCount, lastUpdated }) => (
            <tr key={lab.id} className="hover:bg-[#0c0d11]/80 transition-colors">
              <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                <Link
                  href={`/labs/${lab.id}`}
                  className="inline-flex items-center gap-2.5 text-[#f4f4f2] group"
                >
                  <ModelIcon modelSlug={lab.iconSlug} size={16} />
                  <div>
                    <span className="font-display text-[14.5px] font-semibold underline decoration-white/25 underline-offset-4 group-hover:decoration-white">
                      {lab.name}
                    </span>
                    <div className="font-mono text-xs text-[#717682] mt-0.5">{lab.id}</div>
                  </div>
                </Link>
              </td>
              <td className="py-4 px-4 sm:px-5 text-xs text-[#8b909a] max-w-md">
                {lab.description}
              </td>
              <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#f4f4f2] tabular-nums">
                <Link
                  href={`/labs/${lab.id}`}
                  className="underline decoration-white/25 underline-offset-4 hover:decoration-white"
                >
                  {modelCount}
                </Link>
              </td>
              <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#c8ccd4] tabular-nums">
                {providerCount}
              </td>
              <td className="py-4 px-4 sm:px-5 whitespace-nowrap font-mono text-[13px] text-[#8b909a] tabular-nums">
                {lastUpdated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
