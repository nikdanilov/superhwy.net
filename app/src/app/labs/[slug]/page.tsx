import Link from "next/link";
import { notFound } from "next/navigation";
import { getLab, getModelsByLab, LABS } from "@/lib/catalog";
import { ModelIcon } from "@/components/BrandIcon";
import { ModelsTable } from "@/components/ModelsTable";

export function generateStaticParams() {
  return LABS.map((l) => ({ slug: l.id }));
}

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) notFound();

  const models = getModelsByLab(lab.id);

  return (
    <div className="w-full">
      <section className="px-4 sm:px-6 pt-7 pb-6 border-b border-white/[0.085] space-y-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8b909a]">
          <Link
            href="/labs"
            className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            Labs
          </Link>
          <span className="text-white/25">/</span>
          <span>{lab.name}</span>
        </nav>

        <div className="flex items-center gap-3">
          <ModelIcon modelSlug={lab.iconSlug} size={24} />
          <h1 className="font-display text-3xl font-bold text-[#f4f4f2] tracking-[-0.03em]">
            {lab.name}
          </h1>
        </div>

        <p className="text-sm text-[#8b909a] max-w-2xl">{lab.description}</p>
      </section>

      <ModelsTable models={models} />
    </div>
  );
}
