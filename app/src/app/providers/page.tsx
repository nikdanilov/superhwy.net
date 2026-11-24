import Link from "next/link";
import { getModelsByProvider, PROVIDERS } from "@/lib/catalog";
import { ProviderIcon } from "@/components/BrandIcon";

export default function ProvidersPage() {
  const rows = PROVIDERS.map((p) => ({
    provider: p,
    modelCount: getModelsByProvider(p.id).length,
  })).sort((a, b) => b.modelCount - a.modelCount || a.provider.name.localeCompare(b.provider.name));

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/[0.085]">
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Provider
            </th>
            <th className="h-12 px-4 sm:px-5 text-right font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Models
            </th>
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Package
            </th>
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              API
            </th>
            <th className="h-12 px-4 sm:px-5 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-[#8b909a]">
              Docs
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.07]">
          {rows.map(({ provider, modelCount }) => (
            <tr key={provider.id} className="hover:bg-[#0c0d11]/80 transition-colors">
              <td className="py-4 px-4 sm:px-5 whitespace-nowrap">
                <Link
                  href={`/providers/${provider.id}`}
                  className="inline-flex items-center gap-2.5 text-[#f4f4f2] group"
                >
                  <ProviderIcon providerSlug={provider.iconSlug} size={16} />
                  <div>
                    <span className="font-display text-[14.5px] font-semibold underline decoration-white/25 underline-offset-4 group-hover:decoration-white">
                      {provider.name}
                    </span>
                    <div className="font-mono text-xs text-[#717682] mt-0.5">{provider.id}</div>
                  </div>
                </Link>
              </td>
              <td className="py-4 px-4 sm:px-5 text-right whitespace-nowrap font-mono text-[13px] text-[#f4f4f2] tabular-nums">
                <Link
                  href={`/providers/${provider.id}`}
                  className="underline decoration-white/25 underline-offset-4 hover:decoration-white"
                >
                  {modelCount}
                </Link>
              </td>
              <td className="py-4 px-4 sm:px-5 whitespace-nowrap font-mono text-xs text-[#c8ccd4]">
                {provider.npm}
              </td>
              <td className="py-4 px-4 sm:px-5 whitespace-nowrap font-mono text-xs text-[#8b909a]">
                {provider.api}
              </td>
              <td className="py-4 px-4 sm:px-5 whitespace-nowrap text-xs">
                <a
                  href={provider.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[#c8ccd4] underline decoration-white/25 underline-offset-4 hover:text-[#f4f4f2] hover:decoration-white"
                >
                  {provider.docs.replace(/^https?:\/\//, "")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
