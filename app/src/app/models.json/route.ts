import { NextResponse } from "next/server";
import { MODELS } from "@/lib/catalog";

export const dynamic = "force-static";

/**
 * Provider-agnostic canonical models database (GET /models.json).
 */
export function GET() {
  const payload: Record<string, unknown> = {};

  for (const m of MODELS) {
    payload[m.id] = {
      id: m.id,
      name: m.name,
      family: m.family,
      lab: m.labId,
      description: m.description,
      open_weights: m.weights === "open",
      ...(m.hfRepo ? { hf_repo: m.hfRepo } : {}),
      reasoning: m.reasoning,
      tool_call: m.toolCall,
      structured_output: m.structured,
      temperature: m.temperature,
      modalities: {
        input: m.inputModalities,
        output: m.outputModalities,
      },
      ...(m.costInput !== null || m.costOutput !== null
        ? { cost: { input: m.costInput ?? 0, output: m.costOutput ?? 0 } }
        : {}),
      limit: {
        context: m.context,
        output: m.output,
      },
      ...(m.knowledge ? { knowledge: m.knowledge } : {}),
      release_date: m.releaseDate,
      last_updated: m.updatedDate,
      providers: m.deployments.map((d) => ({
        provider: d.providerId,
        model_id: d.providerModelId,
      })),
    };
  }

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=600",
    },
  });
}
