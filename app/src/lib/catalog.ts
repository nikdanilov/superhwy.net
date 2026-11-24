export type InputModality = "text" | "image" | "video" | "audio" | "pdf";
export type OutputModality = "text" | "image" | "video" | "audio" | "embedding";

export interface Lab {
  id: string;
  name: string;
  description: string;
  website: string;
  iconSlug: string;
}

export interface Provider {
  id: string;
  name: string;
  npm: string;
  env: string[];
  api: string;
  docs: string;
  iconSlug: string;
}

export interface ModelDeployment {
  providerId: string;
  providerModelId: string;
  context: number;
  output: number;
  costInput: number | null;
  costOutput: number | null;
  reasoning: boolean;
  toolCall: boolean;
  structured: boolean | null;
  temperature: boolean;
}

export interface CatalogModel {
  id: string;
  slug: string;
  name: string;
  family: string;
  labId: string;
  description: string;
  context: number;
  output: number;
  inputModalities: InputModality[];
  outputModalities: OutputModality[];
  reasoning: boolean;
  toolCall: boolean;
  structured: boolean | null;
  temperature: boolean;
  weights: "open" | "closed";
  hfRepo: string | null;
  costInput: number | null;
  costOutput: number | null;
  knowledge: string | null;
  releaseDate: string;
  updatedDate: string;
  deployments: ModelDeployment[];
}

export const LABS: Lab[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    description: "AI safety and research lab building the Claude frontier model family.",
    website: "https://anthropic.com",
    iconSlug: "claude",
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "Research organization behind the GPT frontier and open-weight gpt-oss families.",
    website: "https://openai.com",
    iconSlug: "openai",
  },
  {
    id: "google",
    name: "Google",
    description: "Google DeepMind multimodal research behind the Gemini and open Gemma families.",
    website: "https://deepmind.google",
    iconSlug: "gemini",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    description: "Open-weight reasoning and MoE research lab.",
    website: "https://deepseek.com",
    iconSlug: "deepseek",
  },
  {
    id: "qwen",
    name: "Qwen",
    description: "Alibaba Qwen team developing multilingual, vision, and coding models.",
    website: "https://qwenlm.github.io",
    iconSlug: "qwen",
  },
  {
    id: "z-ai",
    name: "Z.ai",
    description: "Builders of the open-weight GLM multimodal reasoning family.",
    website: "https://z.ai",
    iconSlug: "glm",
  },
  {
    id: "tencent",
    name: "Tencent",
    description: "Hunyuan research team building high-throughput open MoE models.",
    website: "https://hunyuan.tencent.com",
    iconSlug: "tencent",
  },
  {
    id: "minimax",
    name: "MiniMax",
    description: "Long-context open-weight multimodal foundation model lab.",
    website: "https://minimax.io",
    iconSlug: "minimax",
  },
  {
    id: "moonshotai",
    name: "Moonshot AI",
    description: "Long-context agentic research behind the Kimi model family.",
    website: "https://moonshot.ai",
    iconSlug: "kimi",
  },
  {
    id: "meta",
    name: "Meta",
    description: "Meta Superintelligence Labs behind the Muse and open-weight Llama families.",
    website: "https://ai.meta.com",
    iconSlug: "meta",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    description: "Open-weight Nemotron reasoning and multimodal models.",
    website: "https://nvidia.com/ai",
    iconSlug: "nvidia",
  },
  {
    id: "mistralai",
    name: "Mistral",
    description: "European frontier lab building Mistral Large, Medium, and open Small models.",
    website: "https://mistral.ai",
    iconSlug: "mistral",
  },
  {
    id: "xai",
    name: "xAI",
    description: "Real-time reasoning and search-native Grok models.",
    website: "https://x.ai",
    iconSlug: "grok",
  },
  {
    id: "thinkingmachines",
    name: "Thinking Machines",
    description: "Research lab behind the open-weight Inkling model series.",
    website: "https://thinkingmachines.ai",
    iconSlug: "thinkingmachines",
  },
];

export const PROVIDERS: Provider[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    npm: "@ai-sdk/anthropic",
    env: ["ANTHROPIC_API_KEY"],
    api: "https://api.anthropic.com/v1",
    docs: "https://docs.anthropic.com",
    iconSlug: "anthropic",
  },
  {
    id: "openai",
    name: "OpenAI",
    npm: "@ai-sdk/openai",
    env: ["OPENAI_API_KEY"],
    api: "https://api.openai.com/v1",
    docs: "https://platform.openai.com/docs",
    iconSlug: "openai",
  },
  {
    id: "google",
    name: "Google AI",
    npm: "@ai-sdk/google",
    env: ["GOOGLE_GENERATIVE_AI_API_KEY"],
    api: "https://generativelanguage.googleapis.com/v1beta",
    docs: "https://ai.google.dev/docs",
    iconSlug: "google",
  },
  {
    id: "bedrock",
    name: "AWS Bedrock",
    npm: "@ai-sdk/amazon-bedrock",
    env: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"],
    api: "https://bedrock-runtime.us-east-1.amazonaws.com",
    docs: "https://docs.aws.amazon.com/bedrock",
    iconSlug: "bedrock",
  },
  {
    id: "vertex",
    name: "Google Vertex",
    npm: "@ai-sdk/google-vertex",
    env: ["GOOGLE_VERTEX_PROJECT", "GOOGLE_VERTEX_LOCATION"],
    api: "https://us-central1-aiplatform.googleapis.com/v1",
    docs: "https://cloud.google.com/vertex-ai/docs",
    iconSlug: "vertex",
  },
  {
    id: "azure",
    name: "Azure Foundry",
    npm: "@ai-sdk/azure",
    env: ["AZURE_API_KEY", "AZURE_RESOURCE_NAME"],
    api: "https://models.inference.ai.azure.com",
    docs: "https://learn.microsoft.com/azure/ai-foundry",
    iconSlug: "azure",
  },
  {
    id: "fireworks",
    name: "Fireworks AI",
    npm: "@ai-sdk/fireworks",
    env: ["FIREWORKS_API_KEY"],
    api: "https://api.fireworks.ai/inference/v1",
    docs: "https://docs.fireworks.ai",
    iconSlug: "fireworks",
  },
  {
    id: "together",
    name: "Together AI",
    npm: "@ai-sdk/togetherai",
    env: ["TOGETHER_API_KEY"],
    api: "https://api.together.xyz/v1",
    docs: "https://docs.together.ai",
    iconSlug: "together",
  },
  {
    id: "groq",
    name: "Groq",
    npm: "@ai-sdk/groq",
    env: ["GROQ_API_KEY"],
    api: "https://api.groq.com/openai/v1",
    docs: "https://console.groq.com/docs",
    iconSlug: "groq",
  },
  {
    id: "cerebras",
    name: "Cerebras",
    npm: "@ai-sdk/cerebras",
    env: ["CEREBRAS_API_KEY"],
    api: "https://api.cerebras.ai/v1",
    docs: "https://inference-docs.cerebras.ai",
    iconSlug: "cerebras",
  },
  {
    id: "mistral",
    name: "Mistral",
    npm: "@ai-sdk/mistral",
    env: ["MISTRAL_API_KEY"],
    api: "https://api.mistral.ai/v1",
    docs: "https://docs.mistral.ai",
    iconSlug: "mistral",
  },
  {
    id: "xai",
    name: "xAI",
    npm: "@ai-sdk/xai",
    env: ["XAI_API_KEY"],
    api: "https://api.x.ai/v1",
    docs: "https://docs.x.ai",
    iconSlug: "xai",
  },
];

interface ModelInput {
  id: string;
  name: string;
  family: string;
  labId: string;
  description: string;
  context: number;
  output: number;
  input: InputModality[];
  outputModalities?: OutputModality[];
  reasoning?: boolean;
  toolCall?: boolean;
  structured?: boolean | null;
  temperature?: boolean;
  hfRepo?: string | null;
  costInput: number | null;
  costOutput: number | null;
  knowledge?: string | null;
  releaseDate: string;
  updatedDate?: string;
  providers: Array<{
    id: string;
    modelId: string;
    context?: number;
    output?: number;
    costInput?: number | null;
    costOutput?: number | null;
  }>;
}

function makeSlug(id: string): string {
  return id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function defineModel(m: ModelInput): CatalogModel {
  const reasoning = m.reasoning ?? true;
  const toolCall = m.toolCall ?? true;
  const structured = m.structured ?? true;
  const temperature = m.temperature ?? true;
  const hfRepo = m.hfRepo ?? null;

  return {
    id: m.id,
    slug: makeSlug(m.id),
    name: m.name,
    family: m.family,
    labId: m.labId,
    description: m.description,
    context: m.context,
    output: m.output,
    inputModalities: m.input,
    outputModalities: m.outputModalities ?? ["text"],
    reasoning,
    toolCall,
    structured,
    temperature,
    weights: hfRepo ? "open" : "closed",
    hfRepo,
    costInput: m.costInput,
    costOutput: m.costOutput,
    knowledge: m.knowledge ?? "2026-09",
    releaseDate: m.releaseDate,
    updatedDate: m.updatedDate ?? m.releaseDate,
    deployments: m.providers.map((p) => ({
      providerId: p.id,
      providerModelId: p.modelId,
      context: p.context ?? m.context,
      output: p.output ?? m.output,
      costInput: p.costInput !== undefined ? p.costInput : m.costInput,
      costOutput: p.costOutput !== undefined ? p.costOutput : m.costOutput,
      reasoning,
      toolCall,
      structured,
      temperature,
    })),
  };
}

export const MODELS: CatalogModel[] = [
  // ── Anthropic (Claude 5.5, Fable 5, Opus 5, Haiku 4.5) ───────────────────
  defineModel({
    id: "anthropic/claude-fable-5.2",
    name: "Claude Fable 5.2",
    family: "claude-fable",
    labId: "anthropic",
    description:
      "Anthropic's highest-intelligence frontier model for deep research, formal verification, and multi-repository engineering.",
    context: 1_000_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    costInput: 8,
    costOutput: 40,
    releaseDate: "2026-11-09",
    updatedDate: "2026-11-22",
    providers: [
      { id: "anthropic", modelId: "claude-fable-5-2-20261109" },
      { id: "bedrock", modelId: "us.anthropic.claude-fable-5-2-v1:0" },
      { id: "vertex", modelId: "claude-fable-5-2@20261109", costInput: 8.8, costOutput: 44 },
    ],
  }),
  defineModel({
    id: "anthropic/claude-fable-5.1",
    name: "Claude Fable 5.1",
    family: "claude-fable",
    labId: "anthropic",
    description:
      "Previous-generation Claude Fable reasoning model tuned for high-stakes analysis and complex synthesis.",
    context: 1_000_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    costInput: 10,
    costOutput: 50,
    releaseDate: "2026-09-01",
    updatedDate: "2026-10-18",
    providers: [
      { id: "anthropic", modelId: "claude-fable-5-1-20260901" },
      { id: "bedrock", modelId: "us.anthropic.claude-fable-5-1-v1:0" },
    ],
  }),
  defineModel({
    id: "anthropic/claude-opus-5.5",
    name: "Claude Opus 5.5",
    family: "claude-5.5",
    labId: "anthropic",
    description:
      "Flagship Claude Opus model for software implementation, architecture design, and autonomous coding.",
    context: 1_000_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    costInput: 4,
    costOutput: 20,
    releaseDate: "2026-09-22",
    updatedDate: "2026-11-18",
    providers: [
      { id: "anthropic", modelId: "claude-opus-5-5-20260922" },
      { id: "bedrock", modelId: "us.anthropic.claude-opus-5-5-v1:0" },
      { id: "vertex", modelId: "claude-opus-5-5@20260922", costInput: 4.4, costOutput: 22 },
    ],
  }),
  defineModel({
    id: "anthropic/claude-opus-5",
    name: "Claude Opus 5",
    family: "claude-5",
    labId: "anthropic",
    description:
      "Claude Opus 5 flagship reasoning and long-horizon coding model.",
    context: 1_000_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    costInput: 5,
    costOutput: 25,
    releaseDate: "2026-07-24",
    updatedDate: "2026-10-05",
    providers: [
      { id: "anthropic", modelId: "claude-opus-5-20260724" },
      { id: "bedrock", modelId: "us.anthropic.claude-opus-5-v1:0" },
      { id: "vertex", modelId: "claude-opus-5@20260724" },
    ],
  }),
  defineModel({
    id: "anthropic/claude-sonnet-5.5",
    name: "Claude Sonnet 5.5",
    family: "claude-5.5",
    labId: "anthropic",
    description:
      "Balanced workhorse Claude model for agentic software engineering, tool use, and computer control.",
    context: 1_000_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    costInput: 2,
    costOutput: 10,
    releaseDate: "2026-09-28",
    updatedDate: "2026-11-16",
    providers: [
      { id: "anthropic", modelId: "claude-sonnet-5-5-20260928" },
      { id: "bedrock", modelId: "us.anthropic.claude-sonnet-5-5-v1:0" },
      { id: "vertex", modelId: "claude-sonnet-5-5@20260928", costInput: 2.2, costOutput: 11 },
    ],
  }),
  defineModel({
    id: "anthropic/claude-haiku-5.5",
    name: "Claude Haiku 5.5",
    family: "claude-5.5",
    labId: "anthropic",
    description:
      "Ultra-fast, low-cost 1M-context Claude model built for high-frequency subagents, routing, and real-time UX.",
    context: 1_000_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    costInput: 0.1,
    costOutput: 0.5,
    releaseDate: "2026-10-07",
    updatedDate: "2026-11-20",
    providers: [
      { id: "anthropic", modelId: "claude-haiku-5-5-20261007" },
      { id: "bedrock", modelId: "us.anthropic.claude-haiku-5-5-v1:0" },
      { id: "vertex", modelId: "claude-haiku-5-5@20261007" },
    ],
  }),
  defineModel({
    id: "anthropic/claude-haiku-4.5",
    name: "Claude Haiku 4.5",
    family: "claude-4.5",
    labId: "anthropic",
    description:
      "Compact Claude 4.5 model widely deployed in production classification, extraction, and fast coding loops.",
    context: 200_000,
    output: 64_000,
    input: ["text", "image", "pdf"],
    costInput: 1,
    costOutput: 5,
    knowledge: "2025-07",
    releaseDate: "2025-10-15",
    updatedDate: "2026-08-12",
    providers: [
      { id: "anthropic", modelId: "claude-haiku-4-5-20251015" },
      { id: "bedrock", modelId: "us.anthropic.claude-haiku-4-5-v1:0" },
      { id: "vertex", modelId: "claude-haiku-4-5@20251015" },
    ],
  }),

  // ── OpenAI (GPT-6.2, GPT-6.1, GPT-6, GPT-5, GPT-4, gpt-oss) ─────────────
  defineModel({
    id: "openai/gpt-6.2-astra",
    name: "GPT-6.2 Astra",
    family: "gpt-6.2",
    labId: "openai",
    description:
      "OpenAI's top reasoning tier for frontier math, science, and complex multi-step software architecture.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 8,
    costOutput: 40,
    releaseDate: "2026-11-17",
    updatedDate: "2026-11-23",
    providers: [
      { id: "openai", modelId: "gpt-6.2-astra" },
      { id: "azure", modelId: "gpt-6.2-astra" },
    ],
  }),
  defineModel({
    id: "openai/gpt-6.2-sol",
    name: "GPT-6.2 Sol",
    family: "gpt-6.2",
    labId: "openai",
    description:
      "General-purpose GPT-6.2 flagship for coding, planning, tool calling, and structured outputs.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 2,
    costOutput: 10,
    releaseDate: "2026-11-17",
    updatedDate: "2026-11-23",
    providers: [
      { id: "openai", modelId: "gpt-6.2-sol" },
      { id: "azure", modelId: "gpt-6.2-sol" },
    ],
  }),
  defineModel({
    id: "openai/gpt-6.1-terra",
    name: "GPT-6.1 Terra",
    family: "gpt-6.1",
    labId: "openai",
    description:
      "Mid-tier GPT-6.1 model balancing 1M context reasoning with half the cost of Sol.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 1,
    costOutput: 5,
    releaseDate: "2026-10-26",
    updatedDate: "2026-11-15",
    providers: [
      { id: "openai", modelId: "gpt-6.1-terra" },
      { id: "azure", modelId: "gpt-6.1-terra" },
    ],
  }),
  defineModel({
    id: "openai/gpt-6.1-sol",
    name: "GPT-6.1 Sol",
    family: "gpt-6.1",
    labId: "openai",
    description:
      "Widely deployed GPT-6.1 coding and reasoning model across enterprise agent pipelines.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 2,
    costOutput: 10,
    releaseDate: "2026-09-29",
    updatedDate: "2026-11-10",
    providers: [
      { id: "openai", modelId: "gpt-6.1-sol" },
      { id: "azure", modelId: "gpt-6.1-sol" },
    ],
  }),
  defineModel({
    id: "openai/gpt-6-luna",
    name: "GPT-6 Luna",
    family: "gpt-6",
    labId: "openai",
    description:
      "High-volume, ultra-low-cost 1M-context GPT-6 tier dominating production agent traffic.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 0.1,
    costOutput: 0.5,
    releaseDate: "2026-09-22",
    updatedDate: "2026-11-19",
    providers: [
      { id: "openai", modelId: "gpt-6-luna" },
      { id: "azure", modelId: "gpt-6-luna" },
    ],
  }),
  defineModel({
    id: "openai/gpt-6-astra",
    name: "GPT-6 Astra",
    family: "gpt-6",
    labId: "openai",
    description:
      "First-generation GPT-6 Astra deep-reasoning tier for research and complex code synthesis.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 10,
    costOutput: 50,
    releaseDate: "2026-09-04",
    updatedDate: "2026-10-20",
    providers: [
      { id: "openai", modelId: "gpt-6-astra" },
      { id: "azure", modelId: "gpt-6-astra" },
    ],
  }),
  defineModel({
    id: "openai/gpt-6-sol",
    name: "GPT-6 Sol",
    family: "gpt-6",
    labId: "openai",
    description:
      "GPT-6 Sol general-purpose model with 1M context and native structured outputs.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 2,
    costOutput: 10,
    releaseDate: "2026-09-22",
    updatedDate: "2026-10-28",
    providers: [
      { id: "openai", modelId: "gpt-6-sol" },
      { id: "azure", modelId: "gpt-6-sol" },
    ],
  }),
  defineModel({
    id: "openai/gpt-5.6-luna",
    name: "GPT-5.6 Luna",
    family: "gpt-5.6",
    labId: "openai",
    description:
      "Fast 1M-context GPT-5.6 tier optimized for high-throughput extraction and chat workloads.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 0.2,
    costOutput: 1.2,
    knowledge: "2026-05",
    releaseDate: "2026-07-09",
    updatedDate: "2026-09-14",
    providers: [
      { id: "openai", modelId: "gpt-5.6-luna" },
      { id: "azure", modelId: "gpt-5.6-luna" },
    ],
  }),
  defineModel({
    id: "openai/gpt-5.4-pro",
    name: "GPT-5.4 Pro",
    family: "gpt-5.4",
    labId: "openai",
    description:
      "Extended-compute GPT-5.4 Pro model for maximum reliability on long analytical tasks.",
    context: 1_050_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 30,
    costOutput: 180,
    knowledge: "2026-01",
    releaseDate: "2026-03-05",
    updatedDate: "2026-07-01",
    providers: [
      { id: "openai", modelId: "gpt-5.4-pro" },
      { id: "azure", modelId: "gpt-5.4-pro" },
    ],
  }),
  defineModel({
    id: "openai/gpt-5.4-mini",
    name: "GPT-5.4 Mini",
    family: "gpt-5.4",
    labId: "openai",
    description:
      "Compact 400K-context GPT-5.4 model for fast developer tooling and structured JSON pipelines.",
    context: 400_000,
    output: 128_000,
    input: ["text", "image", "pdf"],
    temperature: false,
    costInput: 0.75,
    costOutput: 4.5,
    knowledge: "2026-01",
    releaseDate: "2026-03-17",
    updatedDate: "2026-06-20",
    providers: [
      { id: "openai", modelId: "gpt-5.4-mini" },
      { id: "azure", modelId: "gpt-5.4-mini" },
    ],
  }),
  defineModel({
    id: "openai/gpt-4.1-mini",
    name: "GPT-4.1 Mini",
    family: "gpt-4.1",
    labId: "openai",
    description:
      "1M-context non-reasoning GPT-4.1 Mini prized for deterministic latency and low-cost instruction following.",
    context: 1_047_576,
    output: 32_768,
    input: ["text", "image", "pdf"],
    reasoning: false,
    costInput: 0.4,
    costOutput: 1.6,
    knowledge: "2024-06",
    releaseDate: "2025-04-14",
    updatedDate: "2026-04-01",
    providers: [
      { id: "openai", modelId: "gpt-4.1-mini" },
      { id: "azure", modelId: "gpt-4.1-mini" },
    ],
  }),
  defineModel({
    id: "openai/gpt-4o-mini",
    name: "GPT-4o-mini",
    family: "gpt-4o",
    labId: "openai",
    description:
      "Legacy lightweight multimodal GPT-4o model still used for fast classification and batch workloads.",
    context: 128_000,
    output: 16_384,
    input: ["text", "image", "pdf"],
    reasoning: false,
    costInput: 0.15,
    costOutput: 0.6,
    knowledge: "2023-10",
    releaseDate: "2024-07-18",
    updatedDate: "2025-11-01",
    providers: [
      { id: "openai", modelId: "gpt-4o-mini" },
      { id: "azure", modelId: "gpt-4o-mini" },
    ],
  }),
  defineModel({
    id: "openai/gpt-oss-120b",
    name: "gpt-oss-120b",
    family: "gpt-oss",
    labId: "openai",
    description:
      "Open-weight 120B MoE reasoning model running at 700+ tok/s on custom inference silicon.",
    context: 131_072,
    output: 117_964,
    input: ["text"],
    hfRepo: "openai/gpt-oss-120b",
    costInput: 0.05,
    costOutput: 0.25,
    knowledge: "2025-06",
    releaseDate: "2025-08-05",
    updatedDate: "2026-10-12",
    providers: [
      { id: "cerebras", modelId: "gpt-oss-120b" },
      { id: "groq", modelId: "openai/gpt-oss-120b" },
      { id: "fireworks", modelId: "accounts/fireworks/models/gpt-oss-120b" },
      { id: "together", modelId: "openai/gpt-oss-120b" },
    ],
  }),
  defineModel({
    id: "openai/gpt-oss-20b",
    name: "gpt-oss-20b",
    family: "gpt-oss",
    labId: "openai",
    description:
      "Compact 20B open-weight MoE reasoning model for edge deployments and ultra-low-cost tool loops.",
    context: 131_072,
    output: 117_964,
    input: ["text"],
    hfRepo: "openai/gpt-oss-20b",
    costInput: 0.03,
    costOutput: 0.13,
    knowledge: "2025-06",
    releaseDate: "2025-08-05",
    updatedDate: "2026-10-12",
    providers: [
      { id: "groq", modelId: "openai/gpt-oss-20b" },
      { id: "fireworks", modelId: "accounts/fireworks/models/gpt-oss-20b" },
      { id: "together", modelId: "openai/gpt-oss-20b" },
    ],
  }),

  // ── Google (Gemini 4, Gemini 3.8, Gemini 2.5, Gemma 4) ───────────────────
  defineModel({
    id: "google/gemini-4-neon",
    name: "Gemini 4 Neon",
    family: "gemini-4",
    labId: "google",
    description:
      "Google DeepMind's frontier native-multimodal model across text, image, video, audio, and PDFs.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 3,
    costOutput: 15,
    releaseDate: "2026-11-18",
    updatedDate: "2026-11-23",
    providers: [
      { id: "google", modelId: "gemini-4-neon" },
      { id: "vertex", modelId: "google/gemini-4-neon" },
    ],
  }),
  defineModel({
    id: "google/gemini-4-carbon",
    name: "Gemini 4 Carbon",
    family: "gemini-4",
    labId: "google",
    description:
      "High-intelligence Gemini 4 workhorse heavily used for full-stack implementation and long-context reasoning.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 2,
    costOutput: 10,
    releaseDate: "2026-11-10",
    updatedDate: "2026-11-21",
    providers: [
      { id: "google", modelId: "gemini-4-carbon" },
      { id: "vertex", modelId: "google/gemini-4-carbon" },
    ],
  }),
  defineModel({
    id: "google/gemini-4-hydrogen",
    name: "Gemini 4 Hydrogen",
    family: "gemini-4",
    labId: "google",
    description:
      "Fast multimodal Gemini 4 tier built for high-throughput agent workflows and media ingestion.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 1.5,
    costOutput: 7.5,
    releaseDate: "2026-11-12",
    updatedDate: "2026-11-19",
    providers: [
      { id: "google", modelId: "gemini-4-hydrogen" },
      { id: "vertex", modelId: "google/gemini-4-hydrogen" },
    ],
  }),
  defineModel({
    id: "google/gemini-4-argon",
    name: "Gemini 4 Argon",
    family: "gemini-4",
    labId: "google",
    description:
      "Balanced Gemini 4 reasoning model for multimodal analysis and structured agent tasks.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 2,
    costOutput: 10,
    releaseDate: "2026-10-13",
    updatedDate: "2026-11-11",
    providers: [
      { id: "google", modelId: "gemini-4-argon" },
      { id: "vertex", modelId: "google/gemini-4-argon" },
    ],
  }),
  defineModel({
    id: "google/gemini-3.8-flash",
    name: "Gemini 3.8 Flash",
    family: "gemini-3.8",
    labId: "google",
    description:
      "Low-latency 1M-context multimodal Flash model for real-time agents and video processing.",
    context: 1_048_576,
    output: 65_536,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 0.825,
    costOutput: 4.125,
    releaseDate: "2026-09-02",
    updatedDate: "2026-10-14",
    providers: [
      { id: "google", modelId: "gemini-3.8-flash" },
      { id: "vertex", modelId: "google/gemini-3.8-flash" },
    ],
  }),
  defineModel({
    id: "google/gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    family: "gemini-2.5",
    labId: "google",
    description:
      "Proven cost-efficient 1M-context multimodal workhorse for high-volume production pipelines.",
    context: 1_048_576,
    output: 65_535,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 0.3,
    costOutput: 2.5,
    knowledge: "2025-01",
    releaseDate: "2025-06-17",
    updatedDate: "2026-05-10",
    providers: [
      { id: "google", modelId: "gemini-2.5-flash" },
      { id: "vertex", modelId: "google/gemini-2.5-flash" },
    ],
  }),
  defineModel({
    id: "google/gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash Lite",
    family: "gemini-2.5",
    labId: "google",
    description:
      "Ultra-cheap 1M-context multimodal Flash Lite model for massive extraction and classification jobs.",
    context: 1_048_576,
    output: 65_535,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 0.1,
    costOutput: 0.4,
    knowledge: "2025-01",
    releaseDate: "2025-07-22",
    updatedDate: "2026-05-10",
    providers: [
      { id: "google", modelId: "gemini-2.5-flash-lite" },
      { id: "vertex", modelId: "google/gemini-2.5-flash-lite" },
    ],
  }),
  defineModel({
    id: "google/gemma-4-31b-it",
    name: "Gemma 4 31B",
    family: "gemma-4",
    labId: "google",
    description:
      "Open-weight 31B dense multimodal Gemma 4 model with 262K context and native image/video understanding.",
    context: 262_144,
    output: 16_384,
    input: ["text", "image", "video"],
    hfRepo: "google/gemma-4-31B-it",
    costInput: 0.2,
    costOutput: 0.4,
    knowledge: "2026-02",
    releaseDate: "2026-04-02",
    updatedDate: "2026-08-19",
    providers: [
      { id: "google", modelId: "gemma-4-31b-it" },
      { id: "together", modelId: "google/gemma-4-31b-it" },
      { id: "fireworks", modelId: "accounts/fireworks/models/gemma-4-31b-it" },
    ],
  }),
  defineModel({
    id: "google/gemma-4-26b-a4b-it",
    name: "Gemma 4 26B A4B",
    family: "gemma-4",
    labId: "google",
    description:
      "Open-weight 26B (4B active) MoE multimodal model tuned for fast local and cloud inference.",
    context: 262_144,
    output: 235_929,
    input: ["text", "image", "video"],
    hfRepo: "google/gemma-4-26B-A4B-it",
    costInput: 0.09,
    costOutput: 0.3,
    knowledge: "2026-02",
    releaseDate: "2026-04-03",
    updatedDate: "2026-08-19",
    providers: [
      { id: "together", modelId: "google/gemma-4-26b-a4b-it" },
      { id: "fireworks", modelId: "accounts/fireworks/models/gemma-4-26b-a4b-it" },
      { id: "groq", modelId: "gemma-4-26b-a4b-it" },
    ],
  }),

  // ── DeepSeek ─────────────────────────────────────────────────────────────
  defineModel({
    id: "deepseek/deepseek-v4.1-flash-1017",
    name: "DeepSeek V4.1 Flash 1017",
    family: "deepseek-v4",
    labId: "deepseek",
    description:
      "October checkpoint of DeepSeek V4.1 Flash — highest-volume open-weight reasoning and coding MoE model.",
    context: 1_048_576,
    output: 393_216,
    input: ["text", "image"],
    hfRepo: "deepseek-ai/DeepSeek-V4.1-Flash-1017",
    costInput: 0.03,
    costOutput: 0.2,
    releaseDate: "2026-10-17",
    updatedDate: "2026-11-23",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/deepseek-v4p1-flash-1017" },
      { id: "together", modelId: "deepseek-ai/DeepSeek-V4.1-Flash-1017", costInput: 0.04, costOutput: 0.22 },
      { id: "cerebras", modelId: "deepseek-v4.1-flash-1017", context: 262_144, output: 65_536 },
      { id: "groq", modelId: "deepseek-v4.1-flash-1017", context: 131_072, output: 65_536 },
    ],
  }),
  defineModel({
    id: "deepseek/deepseek-v4.1-flash",
    name: "DeepSeek V4.1 Flash",
    family: "deepseek-v4",
    labId: "deepseek",
    description:
      "High-speed 1M-context open-weight MoE coding and reasoning model with native vision support.",
    context: 1_048_576,
    output: 393_216,
    input: ["text", "image"],
    hfRepo: "deepseek-ai/DeepSeek-V4.1-Flash",
    costInput: 0.051,
    costOutput: 0.2,
    releaseDate: "2026-09-10",
    updatedDate: "2026-11-21",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/deepseek-v4p1-flash" },
      { id: "together", modelId: "deepseek-ai/DeepSeek-V4.1-Flash" },
      { id: "cerebras", modelId: "deepseek-v4.1-flash", context: 262_144, output: 65_536 },
      { id: "groq", modelId: "deepseek-v4.1-flash", context: 131_072, output: 65_536 },
    ],
  }),
  defineModel({
    id: "deepseek/deepseek-v4-flash-0731",
    name: "DeepSeek V4 Flash 0731",
    family: "deepseek-v4",
    labId: "deepseek",
    description:
      "July checkpoint of DeepSeek V4 Flash with 1M context and ultra-low-cost token generation.",
    context: 1_048_576,
    output: 943_718,
    input: ["text"],
    hfRepo: "deepseek-ai/DeepSeek-V4-Flash-0731",
    costInput: 0.046,
    costOutput: 0.3,
    knowledge: "2026-06",
    releaseDate: "2026-07-31",
    updatedDate: "2026-10-08",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/deepseek-v4-flash-0731" },
      { id: "together", modelId: "deepseek-ai/DeepSeek-V4-Flash-0731" },
    ],
  }),
  defineModel({
    id: "deepseek/deepseek-v3.2",
    name: "DeepSeek V3.2",
    family: "deepseek-v3",
    labId: "deepseek",
    description:
      "Proven open-weight DeepSeek V3.2 model widely used for cost-effective code generation and reasoning.",
    context: 163_840,
    output: 147_456,
    input: ["text"],
    hfRepo: "deepseek-ai/DeepSeek-V3.2",
    costInput: 0.26,
    costOutput: 0.38,
    knowledge: "2025-10",
    releaseDate: "2025-12-01",
    updatedDate: "2026-06-15",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/deepseek-v3p2" },
      { id: "together", modelId: "deepseek-ai/DeepSeek-V3.2" },
    ],
  }),

  // ── Z.ai (GLM 5) ─────────────────────────────────────────────────────────
  defineModel({
    id: "z-ai/glm-5.4",
    name: "GLM-5.4",
    family: "glm-5",
    labId: "z-ai",
    description:
      "Latest open-weight 1M-context GLM multimodal reasoning model with vision, video, and document support.",
    context: 1_000_000,
    output: 131_072,
    input: ["text", "image", "video", "pdf"],
    hfRepo: "zai-org/GLM-5.4",
    costInput: 0.3,
    costOutput: 1.2,
    releaseDate: "2026-11-12",
    updatedDate: "2026-11-22",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/glm-5p4" },
      { id: "together", modelId: "zai-org/GLM-5.4", costInput: 0.35, costOutput: 1.4 },
    ],
  }),
  defineModel({
    id: "z-ai/glm-5.3-flash",
    name: "GLM 5.3 Flash",
    family: "glm-5",
    labId: "z-ai",
    description:
      "High-volume 1M-context open-weight multimodal model built for fast agentic coding and video tasks.",
    context: 1_048_576,
    output: 943_717,
    input: ["text", "image", "video"],
    hfRepo: "zai-org/GLM-5.3-Flash",
    costInput: 0.15,
    costOutput: 0.5,
    releaseDate: "2026-08-26",
    updatedDate: "2026-11-20",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/glm-5p3-flash" },
      { id: "together", modelId: "zai-org/GLM-5.3-Flash" },
    ],
  }),
  defineModel({
    id: "z-ai/glm-5.3",
    name: "GLM 5.3",
    family: "glm-5",
    labId: "z-ai",
    description:
      "Flagship open-weight GLM 5.3 reasoning model engineered for software implementation and tool calling.",
    context: 1_048_576,
    output: 943_718,
    input: ["text"],
    hfRepo: "zai-org/GLM-5.3",
    costInput: 0.07,
    costOutput: 1.4,
    releaseDate: "2026-08-18",
    updatedDate: "2026-11-14",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/glm-5p3" },
      { id: "together", modelId: "zai-org/GLM-5.3" },
    ],
  }),
  defineModel({
    id: "z-ai/glm-5.2",
    name: "GLM 5.2",
    family: "glm-5",
    labId: "z-ai",
    description:
      "High-throughput open-weight GLM 5.2 reasoning model.",
    context: 1_048_576,
    output: 943_718,
    input: ["text"],
    hfRepo: "zai-org/GLM-5.2",
    costInput: 0.62,
    costOutput: 2.42,
    knowledge: "2026-05",
    releaseDate: "2026-06-16",
    updatedDate: "2026-09-20",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/glm-5p2" },
      { id: "together", modelId: "zai-org/GLM-5.2" },
    ],
  }),

  // ── Qwen (Alibaba) ───────────────────────────────────────────────────────
  defineModel({
    id: "qwen/qwen4-max",
    name: "Qwen4 Max",
    family: "qwen4",
    labId: "qwen",
    description:
      "Flagship 1M-context multilingual, coding, and multimodal reasoning model from the Qwen team.",
    context: 1_000_000,
    output: 131_072,
    input: ["text", "image", "video"],
    costInput: 1.425,
    costOutput: 4.275,
    releaseDate: "2026-11-16",
    updatedDate: "2026-11-22",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/qwen4-max" },
      { id: "together", modelId: "Qwen/Qwen4-Max" },
    ],
  }),
  defineModel({
    id: "qwen/qwen3.8-flash",
    name: "Qwen3.8 Flash",
    family: "qwen3.8",
    labId: "qwen",
    description:
      "Fast 1M-context open-weight multimodal Qwen model for coding agents and video understanding.",
    context: 1_000_000,
    output: 131_072,
    input: ["text", "image", "video"],
    hfRepo: "Qwen/Qwen3.8-Flash-Next",
    costInput: 0.15,
    costOutput: 0.47,
    releaseDate: "2026-08-26",
    updatedDate: "2026-11-08",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/qwen3p8-flash" },
      { id: "together", modelId: "Qwen/Qwen3.8-Flash-Next" },
    ],
  }),
  defineModel({
    id: "qwen/qwen3.8-27b",
    name: "Qwen3.8 27B",
    family: "qwen3.8",
    labId: "qwen",
    description:
      "High-speed 27B open-weight dense multimodal model with 1M context and top-tier vision performance.",
    context: 1_024_000,
    output: 235_929,
    input: ["text", "image", "video"],
    hfRepo: "Qwen/Qwen3.8-27B",
    costInput: 0.06,
    costOutput: 1.96,
    releaseDate: "2026-08-14",
    updatedDate: "2026-11-04",
    providers: [
      { id: "cerebras", modelId: "qwen3.8-27b", context: 262_144 },
      { id: "together", modelId: "Qwen/Qwen3.8-27B" },
      { id: "fireworks", modelId: "accounts/fireworks/models/qwen3p8-27b" },
    ],
  }),
  defineModel({
    id: "qwen/qwen3.7-plus",
    name: "Qwen3.7 Plus",
    family: "qwen3.7",
    labId: "qwen",
    description:
      "Balanced 1M-context Qwen3.7 multimodal model for general reasoning and enterprise extraction.",
    context: 1_000_000,
    output: 131_072,
    input: ["text", "image"],
    costInput: 0.32,
    costOutput: 1.28,
    knowledge: "2026-04",
    releaseDate: "2026-06-03",
    updatedDate: "2026-09-12",
    providers: [
      { id: "together", modelId: "Qwen/Qwen3.7-Plus" },
    ],
  }),
  defineModel({
    id: "qwen/qwen3.6-35b-a3b",
    name: "Qwen3.6 35B A3B",
    family: "qwen3.6",
    labId: "qwen",
    description:
      "Ultra-efficient 35B (3B active) open-weight MoE vision-language model.",
    context: 262_144,
    output: 235_929,
    input: ["text", "image", "video"],
    hfRepo: "Qwen/Qwen3.6-35B-A3B",
    costInput: 0.05,
    costOutput: 0.7,
    knowledge: "2026-03",
    releaseDate: "2026-04-27",
    updatedDate: "2026-08-30",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/qwen3p6-35b-a3b" },
      { id: "together", modelId: "Qwen/Qwen3.6-35B-A3B" },
      { id: "groq", modelId: "qwen3.6-35b-a3b" },
    ],
  }),

  // ── Tencent ──────────────────────────────────────────────────────────────
  defineModel({
    id: "tencent/hy4-flash",
    name: "Hy4 Flash",
    family: "hy4",
    labId: "tencent",
    description:
      "Ultra-low-latency 1M-context open-weight MoE model leading weekly token throughput for fast coding tools.",
    context: 1_048_576,
    output: 65_536,
    input: ["text", "image"],
    hfRepo: "tencent/Hy4-flash",
    costInput: 0.035,
    costOutput: 0.14,
    releaseDate: "2026-11-16",
    updatedDate: "2026-11-23",
    providers: [
      { id: "groq", modelId: "hy4-flash", context: 262_144 },
      { id: "fireworks", modelId: "accounts/fireworks/models/hy4-flash" },
      { id: "together", modelId: "tencent/Hy4-flash" },
    ],
  }),

  // ── MiniMax ──────────────────────────────────────────────────────────────
  defineModel({
    id: "minimax/minimax-m3.1-flash",
    name: "MiniMax M3.1 Flash",
    family: "minimax-m3",
    labId: "minimax",
    description:
      "1M-context open-weight multimodal model with 524K output limit engineered for long agentic sessions.",
    context: 1_048_576,
    output: 524_288,
    input: ["text", "image", "video"],
    hfRepo: "MiniMaxAI/MiniMax-M3.1-Flash",
    costInput: 0.075,
    costOutput: 0.3,
    releaseDate: "2026-10-19",
    updatedDate: "2026-11-20",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/minimax-m3p1-flash" },
      { id: "together", modelId: "MiniMaxAI/MiniMax-M3.1-Flash" },
    ],
  }),
  defineModel({
    id: "minimax/minimax-m3",
    name: "MiniMax M3",
    family: "minimax-m3",
    labId: "minimax",
    description:
      "Flagship open-weight MiniMax M3 reasoning and multimodal foundation model.",
    context: 1_048_576,
    output: 512_000,
    input: ["text", "image", "video"],
    hfRepo: "MiniMaxAI/MiniMax-M3",
    costInput: 0.3,
    costOutput: 1.2,
    knowledge: "2026-04",
    releaseDate: "2026-05-31",
    updatedDate: "2026-09-05",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/minimax-m3" },
      { id: "together", modelId: "MiniMaxAI/MiniMax-M3" },
    ],
  }),

  // ── Moonshot AI (Kimi) ───────────────────────────────────────────────────
  defineModel({
    id: "moonshotai/kimi-k3.1-pro",
    name: "Kimi K3.1 Pro",
    family: "kimi-k3",
    labId: "moonshotai",
    description:
      "Open-weight 1M-context agentic reasoning model ranking among the top implementation models.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video"],
    hfRepo: "moonshotai/Kimi-K3.1-Pro",
    costInput: 0.24,
    costOutput: 8.4,
    releaseDate: "2026-10-23",
    updatedDate: "2026-11-19",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/kimi-k3p1-pro" },
      { id: "together", modelId: "moonshotai/Kimi-K3.1-Pro" },
    ],
  }),
  defineModel({
    id: "moonshotai/kimi-k3",
    name: "Kimi K3",
    family: "kimi-k3",
    labId: "moonshotai",
    description:
      "Long-horizon open-weight Kimi K3 coding and research model with native multimodal inputs.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video"],
    hfRepo: "moonshotai/Kimi-K3",
    costInput: 0.19,
    costOutput: 16,
    knowledge: "2026-06",
    releaseDate: "2026-07-16",
    updatedDate: "2026-10-02",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/kimi-k3" },
      { id: "together", modelId: "moonshotai/Kimi-K3" },
    ],
  }),

  // ── Meta (Muse & Llama) ──────────────────────────────────────────────────
  defineModel({
    id: "meta/muse-wonder",
    name: "Muse Wonder",
    family: "muse",
    labId: "meta",
    description:
      "Meta's flagship multimodal reasoning model spanning text, image, video, audio, and PDFs.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 4,
    costOutput: 20,
    releaseDate: "2026-10-12",
    updatedDate: "2026-11-14",
    providers: [
      { id: "bedrock", modelId: "us.meta.muse-wonder-v1:0" },
      { id: "vertex", modelId: "meta/muse-wonder" },
      { id: "azure", modelId: "meta-muse-wonder" },
    ],
  }),
  defineModel({
    id: "meta/muse-spark-1.3",
    name: "Muse Spark 1.3",
    family: "muse",
    labId: "meta",
    description:
      "Balanced 1M-context multimodal Muse model for coding, vision, and structured workflows.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "pdf"],
    costInput: 1.25,
    costOutput: 4.25,
    releaseDate: "2026-09-02",
    updatedDate: "2026-11-08",
    providers: [
      { id: "bedrock", modelId: "us.meta.muse-spark-1-3-v1:0" },
      { id: "vertex", modelId: "meta/muse-spark-1.3" },
      { id: "together", modelId: "meta/muse-spark-1.3" },
    ],
  }),
  defineModel({
    id: "meta/muse-ember",
    name: "Muse Ember",
    family: "muse",
    labId: "meta",
    description:
      "Ultra-fast, low-cost 1M-context multimodal Muse tier built for real-time voice, vision, and agents.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video", "audio", "pdf"],
    costInput: 0.1,
    costOutput: 0.5,
    releaseDate: "2026-11-09",
    updatedDate: "2026-11-21",
    providers: [
      { id: "bedrock", modelId: "us.meta.muse-ember-v1:0" },
      { id: "vertex", modelId: "meta/muse-ember" },
    ],
  }),
  defineModel({
    id: "meta-llama/llama-3.1-8b-instruct",
    name: "Llama 3.1 8B Instruct",
    family: "llama-3.1",
    labId: "meta",
    description:
      "Compact open-weight 8B instruction model running at extreme throughput on Groq and Cerebras.",
    context: 131_072,
    output: 117_964,
    input: ["text"],
    reasoning: false,
    hfRepo: "meta-llama/Meta-Llama-3.1-8B-Instruct",
    costInput: 0.05,
    costOutput: 0.08,
    knowledge: "2023-12",
    releaseDate: "2024-07-23",
    updatedDate: "2026-03-10",
    providers: [
      { id: "cerebras", modelId: "llama3.1-8b" },
      { id: "groq", modelId: "llama-3.1-8b-instant" },
      { id: "together", modelId: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo" },
      { id: "fireworks", modelId: "accounts/fireworks/models/llama-v3p1-8b-instruct" },
    ],
  }),

  // ── NVIDIA (Nemotron) ────────────────────────────────────────────────────
  defineModel({
    id: "nvidia/nemotron-3.5-super-vl",
    name: "Nemotron 3.5 Super VL",
    family: "nemotron-3.5",
    labId: "nvidia",
    description:
      "Open-weight 120B (12B active) multimodal vision-language MoE model with 1M context.",
    context: 1_048_576,
    output: 943_718,
    input: ["text", "image", "video"],
    hfRepo: "nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16",
    costInput: 0.15,
    costOutput: 0.47,
    releaseDate: "2026-10-15",
    updatedDate: "2026-11-17",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/nemotron-3p5-super-vl" },
      { id: "together", modelId: "nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B" },
    ],
  }),
  defineModel({
    id: "nvidia/nemotron-3-ultra-550b-a55b",
    name: "Nemotron 3 Ultra",
    family: "nemotron-3",
    labId: "nvidia",
    description:
      "Open-weight 550B (55B active) MoE reasoning flagship from NVIDIA.",
    context: 262_144,
    output: 16_384,
    input: ["text"],
    hfRepo: "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16",
    costInput: 0.5,
    costOutput: 2.2,
    knowledge: "2026-04",
    releaseDate: "2026-06-04",
    updatedDate: "2026-10-22",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/nemotron-3-ultra-550b" },
      { id: "together", modelId: "nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B" },
    ],
  }),

  // ── Mistral ──────────────────────────────────────────────────────────────
  defineModel({
    id: "mistralai/mistral-large-4-0",
    name: "Mistral Large 4",
    family: "mistral-large",
    labId: "mistralai",
    description:
      "Mistral's 1M-context flagship multilingual and coding model with native vision and document inputs.",
    context: 1_048_576,
    output: 262_144,
    input: ["text", "image", "pdf"],
    costInput: 0.7,
    costOutput: 2.1,
    releaseDate: "2026-09-18",
    updatedDate: "2026-11-06",
    providers: [
      { id: "mistral", modelId: "mistral-large-4-0" },
      { id: "bedrock", modelId: "mistral.mistral-large-4-0-v1:0" },
      { id: "azure", modelId: "mistral-large-4-0" },
    ],
  }),
  defineModel({
    id: "mistralai/mistral-medium-3-5",
    name: "Mistral Medium 3.5",
    family: "mistral-medium",
    labId: "mistralai",
    description:
      "Enterprise-grade Mistral Medium 3.5 model for multilingual reasoning and structured tool calls.",
    context: 262_144,
    output: 65_536,
    input: ["text", "image", "pdf"],
    costInput: 1.5,
    costOutput: 7.5,
    knowledge: "2026-05",
    releaseDate: "2026-07-20",
    updatedDate: "2026-10-01",
    providers: [
      { id: "mistral", modelId: "mistral-medium-3-5" },
      { id: "azure", modelId: "mistral-medium-3-5" },
    ],
  }),
  defineModel({
    id: "mistralai/mistral-small-2603",
    name: "Mistral Small 4",
    family: "mistral-small",
    labId: "mistralai",
    description:
      "Fast, open-weight 262K-context Mistral Small 4 model for low-latency European deployments.",
    context: 262_144,
    output: 65_536,
    input: ["text", "image"],
    hfRepo: "mistralai/Mistral-Small-4-2603",
    costInput: 0.15,
    costOutput: 0.6,
    knowledge: "2026-01",
    releaseDate: "2026-03-19",
    updatedDate: "2026-08-25",
    providers: [
      { id: "mistral", modelId: "mistral-small-2603" },
      { id: "together", modelId: "mistralai/Mistral-Small-4-2603" },
      { id: "fireworks", modelId: "accounts/fireworks/models/mistral-small-4" },
    ],
  }),

  // ── xAI (Grok) ───────────────────────────────────────────────────────────
  defineModel({
    id: "x-ai/grok-4.7",
    name: "Grok 4.7",
    family: "grok-4",
    labId: "xai",
    description:
      "Flagship Grok reasoning model with 500K context, live web grounding, and rapid coding throughput.",
    context: 500_000,
    output: 450_000,
    input: ["text", "image", "pdf"],
    costInput: 2,
    costOutput: 6,
    releaseDate: "2026-09-21",
    updatedDate: "2026-11-08",
    providers: [
      { id: "xai", modelId: "grok-4.7" },
    ],
  }),
  defineModel({
    id: "x-ai/grok-4.3",
    name: "Grok 4.3",
    family: "grok-4",
    labId: "xai",
    description:
      "1M-context Grok 4.3 tier offering lower pricing for long-context analysis and search agents.",
    context: 1_000_000,
    output: 256_000,
    input: ["text", "image", "pdf"],
    costInput: 1.25,
    costOutput: 2.5,
    knowledge: "2026-05",
    releaseDate: "2026-06-12",
    updatedDate: "2026-09-25",
    providers: [
      { id: "xai", modelId: "grok-4.3" },
    ],
  }),

  // ── Thinking Machines ────────────────────────────────────────────────────
  defineModel({
    id: "thinkingmachines/inkling-2-mini",
    name: "Inkling 2 Mini",
    family: "inkling-2",
    labId: "thinkingmachines",
    description:
      "Fast 1M-context open-weight vision-language model trending for lightweight agent and code tasks.",
    context: 1_048_576,
    output: 65_536,
    input: ["text", "image"],
    hfRepo: "thinkingmachines/Inkling-2-Mini",
    costInput: 0.075,
    costOutput: 0.3,
    releaseDate: "2026-11-21",
    updatedDate: "2026-11-23",
    providers: [
      { id: "fireworks", modelId: "accounts/fireworks/models/inkling-2-mini" },
      { id: "together", modelId: "thinkingmachines/Inkling-2-Mini" },
    ],
  }),
];

export const LABS_BY_ID = new Map(LABS.map((l) => [l.id, l]));
export const PROVIDERS_BY_ID = new Map(PROVIDERS.map((p) => [p.id, p]));

export function getLab(id: string): Lab | undefined {
  return LABS_BY_ID.get(id);
}

export function getProvider(id: string): Provider | undefined {
  return PROVIDERS_BY_ID.get(id);
}

export function getModelBySlug(slug: string): CatalogModel | undefined {
  const s = slug.toLowerCase();
  return MODELS.find((m) => m.slug.toLowerCase() === s || m.id.toLowerCase() === s);
}

export function getModelsByLab(labId: string): CatalogModel[] {
  return MODELS.filter((m) => m.labId === labId);
}

export function getModelsByProvider(providerId: string): {
  model: CatalogModel;
  deployment: ModelDeployment;
}[] {
  const out: { model: CatalogModel; deployment: ModelDeployment }[] = [];
  for (const model of MODELS) {
    for (const deployment of model.deployments) {
      if (deployment.providerId === providerId) {
        out.push({ model, deployment });
      }
    }
  }
  return out;
}

export function formatInt(n: number): string {
  if (n <= 0) return "-";
  return n.toLocaleString("en-US");
}

export function formatPricePair(input: number | null, output: number | null): string {
  if (input === null && output === null) return "-";
  const fmt = (v: number | null) =>
    v === null ? "-" : `$${v.toFixed(v < 0.1 ? 3 : 2)}`;
  return `${fmt(input)} / ${fmt(output)}`;
}
