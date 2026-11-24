import Link from "next/link";
import { notFound } from "next/navigation";
import { formatInt, getLab, getModelBySlug, MODELS } from "@/lib/catalog";
import { ModelIcon } from "@/components/BrandIcon";
import { CopyButton } from "@/components/CopyButton";
import { ModalityIcons } from "@/components/ModalityIcons";
import { ModelProvidersTable } from "@/components/ModelProvidersTable";

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  const lab = getLab(model.labId);
  const capabilities = [
    model.reasoning ? "Reasoning" : null,
    model.toolCall ? "Tool Call" : null,
    model.structured ? "Structured" : null,
  ].filter(Boolean);

  return (
    <div className="w-full">
      {/* Top Breadcrumb + Model Title */}
      <section className="px-4 sm:px-6 pt-7 pb-6 border-b border-white/[0.085] space-y-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#8b909a]">
          <Link
            href="/"
            className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            Models
          </Link>
          <span className="text-white/25">/</span>
          <Link
            href={`/labs/${model.labId}`}
            className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white"
          >
            {lab?.name ?? model.labId}
          </Link>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#f4f4f2] tracking-[-0.03em]">
          {model.name}
        </h1>

        <p className="text-sm text-[#8b909a] max-w-3xl leading-relaxed">{model.description}</p>

        <div className="inline-flex items-center gap-1.5 pt-1">
          <code className="font-mono text-xs text-[#c8ccd4]">{model.id}</code>
          <CopyButton value={model.id} label={`Copy ${model.id}`} />
        </div>
      </section>

      {/* 6×2 Hairline Spec Grid (models.dev style) */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-white/[0.085]">
        <div className="p-4 sm:px-5 border-b border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">Lab</div>
          <Link
            href={`/labs/${model.labId}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#f4f4f2] group"
          >
            <ModelIcon modelSlug={lab?.iconSlug ?? model.slug} size={15} />
            <span className="underline decoration-white/25 underline-offset-4 group-hover:decoration-white">
              {lab?.name ?? model.labId}
            </span>
          </Link>
        </div>

        <div className="p-4 sm:px-5 border-b border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Family
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2]">{model.family}</div>
        </div>

        <div className="p-4 sm:px-5 border-b border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Providers
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2] tabular-nums">
            {model.deployments.length}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-b border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Context
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2] tabular-nums">
            {model.context > 0 ? formatInt(model.context) : "0"}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-b border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Output Limit
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2] tabular-nums">
            {formatInt(model.output)}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-b border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Knowledge
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2] tabular-nums">
            {model.knowledge ?? "-"}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Release
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2] tabular-nums">
            {model.releaseDate}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Updated
          </div>
          <div className="font-mono text-sm font-medium text-[#f4f4f2] tabular-nums">
            {model.updatedDate}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Weights
          </div>
          <div className="text-sm font-medium">
            {model.weights === "open" && model.hfRepo ? (
              <a
                href={`https://huggingface.co/${model.hfRepo}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#f4f4f2] underline decoration-white/25 underline-offset-4 hover:decoration-white"
              >
                Open
              </a>
            ) : (
              <span className="text-[#8b909a]">Closed</span>
            )}
          </div>
        </div>

        <div className="p-4 sm:px-5 border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Input
          </div>
          <ModalityIcons modalities={model.inputModalities} />
        </div>

        <div className="p-4 sm:px-5 border-r border-white/[0.07] space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Output Types
          </div>
          <ModalityIcons modalities={model.outputModalities} />
        </div>

        <div className="p-4 sm:px-5 space-y-1.5">
          <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#717682]">
            Capabilities
          </div>
          <div className="text-xs font-mono text-[#c8ccd4]">
            {capabilities.length > 0 ? capabilities.join(" · ") : "-"}
          </div>
        </div>
      </section>

      {/* Providers Breakdown */}
      <section id="providers">
        <div className="px-4 sm:px-6 h-12 border-b border-white/[0.085] flex items-center justify-between">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#f4f4f2]">
            Providers
          </h2>
          <span className="font-mono text-xs text-[#8b909a] tabular-nums">
            {model.deployments.length}
          </span>
        </div>
        <ModelProvidersTable model={model} />
      </section>
    </div>
  );
}
