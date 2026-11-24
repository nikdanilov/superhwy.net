import { NextResponse } from "next/server";
import { MODELS } from "@/lib/catalog";

export const dynamic = "force-static";

/**
 * OpenAI-compatible model catalog list (GET /api/v1/models).
 */
export function GET() {
  return NextResponse.json(
    {
      object: "list",
      registry: "https://superhwy.net/api.json",
      data: MODELS.map((m) => ({
        id: m.id,
        object: "model",
        owned_by: m.labId,
        name: m.name,
        family: m.family,
        open_weights: m.weights === "open",
        ...(m.hfRepo ? { hf_repo: m.hfRepo } : {}),
        modalities: {
          input: m.inputModalities,
          output: m.outputModalities,
        },
        capabilities: {
          reasoning: m.reasoning,
          tool_call: m.toolCall,
          structured_output: m.structured,
          temperature: m.temperature,
        },
        limit: {
          context: m.context,
          output: m.output,
        },
        ...(m.costInput !== null || m.costOutput !== null
          ? { cost: { input: m.costInput ?? 0, output: m.costOutput ?? 0 } }
          : {}),
        providers: m.deployments.map((d) => d.providerId),
        release_date: m.releaseDate,
        last_updated: m.updatedDate,
      })),
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=600",
      },
    }
  );
}
