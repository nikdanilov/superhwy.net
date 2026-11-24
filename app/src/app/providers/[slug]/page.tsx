import Link from "next/link";
import { notFound } from "next/navigation";
import { getModelsByProvider, getProvider, PROVIDERS } from "@/lib/catalog";
import { ProviderIcon } from "@/components/BrandIcon";
import { ModelsTable } from "@/components/ModelsTable";

export function generateStaticParams() {
  return PROVIDERS.map((p) => ({ slug: p.id }));
}

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const provider = getProvider(slug);
  if (!provider) notFound();

  const entries = getModelsByProvider(provider.id);
  const models = entries.map((e) => e.model);

  return (
    <div className="w-full">
      <section className="px-4 sm:px-6 pt-7 pb-6 border-b border-white/[0.085] space-y-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8b909a]">
          <Link
            href="/providers"
            className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            Providers
          </Link>
          <span className="text-white/25">/</span>
          <span>{provider.name}</span>
        </nav>

        <div className="flex items-center gap-3">
          <ProviderIcon providerSlug={provider.iconSlug} size={24} />
          <h1 className="font-display text-3xl font-bold text-[#f4f4f2] tracking-[-0.03em]">
            {provider.name}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-xs text-[#8b909a]">
          <span>Package: <span className="text-[#c8ccd4]">{provider.npm}</span></span>
          <span>API: <span className="text-[#c8ccd4]">{provider.api}</span></span>
          <span>Env: <span className="text-[#c8ccd4]">{provider.env.join(", ")}</span></span>
          <a
            href={provider.docs}
            target="_blank"
            rel="noreferrer"
            className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            Docs
          </a>
        </div>
      </section>

      <ModelsTable models={models} />
    </div>
  );
}
