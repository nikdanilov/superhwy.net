import { NextResponse } from "next/server";
import { getModelsByProvider, PROVIDERS } from "@/lib/catalog";

export const dynamic = "force-static";

/**
 * Provider-grouped model catalog (GET /api.json).
 */
export function GET() {
  const payload: Record<string, unknown> = {};

  for (const provider of PROVIDERS) {
    const entries = getModelsByProvider(provider.id);
    const models: Record<string, unknown> = {};

    for (const { model, deployment } of entries) {
      models[deployment.providerModelId] = {
        id: deployment.providerModelId,
        canonical_id: model.id,
        name: model.name,
        family: model.family,
        attachment: model.inputModalities.some((m) => m !== "text"),
        reasoning: deployment.reasoning,
        tool_call: deployment.toolCall,
        structured_output: deployment.structured,
        temperature: deployment.temperature,
        open_weights: model.weights === "open",
        ...(model.hfRepo ? { hf_repo: model.hfRepo } : {}),
        ...(model.knowledge ? { knowledge: model.knowledge } : {}),
        release_date: model.releaseDate,
        last_updated: model.updatedDate,
        modalities: {
          input: model.inputModalities,
          output: model.outputModalities,
        },
        ...(deployment.costInput !== null || deployment.costOutput !== null
          ? {
              cost: {
                input: deployment.costInput ?? 0,
                output: deployment.costOutput ?? 0,
              },
            }
          : {}),
        limit: {
          context: deployment.context,
          output: deployment.output,
        },
      };
    }

    payload[provider.id] = {
      id: provider.id,
      name: provider.name,
      npm: provider.npm,
      env: provider.env,
      api: provider.api,
      doc: provider.docs,
      models,
    };
  }

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=600",
    },
  });
}
