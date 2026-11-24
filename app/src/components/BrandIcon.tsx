"use client";

import Image from "next/image";
import { ArrowUpDown, Image as ImageIcon, Mic, Video, Volume2 } from "lucide-react";

const PROVIDER_ICON_MAP: Record<string, string> = {
  groq: "/icons/providers/groq.svg",
  cerebras: "/icons/providers/cerebras.svg",
  fireworks: "/icons/providers/fireworks.svg",
  together: "/icons/providers/together.svg",
  anthropic: "/icons/providers/anthropic.svg",
  openai: "/icons/providers/openai.svg",
  openrouter: "/icons/providers/openrouter.svg",
  google: "/icons/providers/google.svg",
  vertex: "/icons/providers/google.svg",
  bedrock: "/icons/providers/bedrock.svg",
  azure: "/icons/providers/azure.svg",
  xai: "/icons/providers/xai.svg",
  mistral: "/icons/providers/mistral.svg",
};

function resolveModelIcon(modelSlugOrName: string): string | null {
  const s = modelSlugOrName.toLowerCase();
  if (s.includes("deepseek")) return "/icons/models/deepseek.svg";
  if (s.includes("hy4") || s.includes("tencent") || s.includes("hunyuan")) {
    return "/icons/models/tencent.svg";
  }
  if (s.includes("glm") || s.includes("zhipu") || s.includes("z-ai")) {
    return "/icons/models/glm.svg";
  }
  if (s.includes("gemini") || s.includes("gemma") || s.includes("google")) {
    return "/icons/models/gemini.svg";
  }
  if (s.includes("grok") || s.includes("xai")) return "/icons/models/grok.svg";
  if (s.includes("kimi") || s.includes("moonshot")) return "/icons/models/kimi.svg";
  if (s.includes("qwen") || s.includes("alibaba")) return "/icons/models/qwen.svg";
  if (s.includes("claude") || s.includes("anthropic")) return "/icons/models/claude.svg";
  if (s.includes("llama") || s.includes("meta") || s.includes("muse")) {
    return "/icons/models/llama.svg";
  }
  if (s.includes("mistral") || s.includes("pixtral") || s.includes("devstral")) {
    return "/icons/models/mistral.svg";
  }
  if (s.includes("nvidia") || s.includes("nemotron")) {
    return "/icons/models/nvidia.svg";
  }
  if (s.includes("minimax")) return "/icons/models/minimax.svg";
  if (s.includes("thinking") || s.includes("inkling")) {
    return "/icons/models/thinkingmachines.svg";
  }
  if (
    s.includes("gpt") ||
    s.includes("openai") ||
    s.includes("whisper") ||
    s.includes("o1") ||
    s.includes("o3")
  ) {
    return "/icons/models/openai.svg";
  }
  return null;
}

export function ProviderIcon({
  providerSlug,
  size = 14,
  framed = false,
  className = "",
}: {
  providerSlug: string;
  size?: number;
  framed?: boolean;
  className?: string;
}) {
  const key = providerSlug.toLowerCase();
  const src = PROVIDER_ICON_MAP[key];

  if (!src) {
    const initials = providerSlug.slice(0, 2).toUpperCase();
    return (
      <span
        style={{ width: framed ? size + 12 : size, height: framed ? size + 12 : size }}
        className={`inline-flex items-center justify-center rounded-md border border-white/[0.12] bg-white/[0.08] font-mono text-[8px] font-bold text-[#dadce3] shrink-0 ${className}`}
      >
        {initials}
      </span>
    );
  }

  if (framed) {
    return (
      <span
        style={{ width: size + 14, height: size + 14 }}
        className={`inline-flex items-center justify-center rounded-xl bg-[#12141a] border border-white/[0.1] shadow-inner shrink-0 ${className}`}
      >
        <Image src={src} alt={providerSlug} width={size} height={size} unoptimized />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={providerSlug}
      width={size}
      height={size}
      unoptimized
      className={`shrink-0 ${className}`}
    />
  );
}

export function ModelIcon({
  modelSlug,
  size = 18,
  framed = false,
  className = "",
}: {
  modelSlug: string;
  size?: number;
  framed?: boolean;
  className?: string;
}) {
  const s = modelSlug.toLowerCase();
  const src = resolveModelIcon(modelSlug);
  if (!src) {
    const renderGlyph = () => {
      if (s.includes("flux") || s.includes("sdxl") || s.includes("image")) {
        return <ImageIcon style={{ width: size * 0.85, height: size * 0.85 }} className="text-[#f59e0b]" />;
      }
      if (s.includes("wan") || s.includes("ltx") || s.includes("video")) {
        return <Video style={{ width: size * 0.85, height: size * 0.85 }} className="text-[#ff5a5f]" />;
      }
      if (s.includes("orpheus") || s.includes("kokoro") || s.includes("tts") || s.includes("voice")) {
        return <Volume2 style={{ width: size * 0.85, height: size * 0.85 }} className="text-[#14f1b2]" />;
      }
      if (s.includes("bge") || s.includes("rerank")) {
        return <ArrowUpDown style={{ width: size * 0.85, height: size * 0.85 }} className="text-[#f4f4f2]" />;
      }
      if (s.includes("whisper") || s.includes("transcrib")) {
        return <Mic style={{ width: size * 0.85, height: size * 0.85 }} className="text-[#14f1b2]" />;
      }
      return <span className="font-mono text-[10px] font-bold text-[#f4f4f2]">{modelSlug.slice(0, 2).toUpperCase()}</span>;
    };

    return (
      <span
        style={{ width: framed ? size + 12 : size, height: framed ? size + 12 : size }}
        className={`inline-flex items-center justify-center rounded-lg ${
          framed ? "bg-[#12141a] border border-white/[0.1]" : ""
        } shrink-0 ${className}`}
      >
        {renderGlyph()}
      </span>
    );
  }

  if (framed) {
    return (
      <span
        style={{ width: size + 14, height: size + 14 }}
        className={`inline-flex items-center justify-center rounded-xl bg-[#12141a] border border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] shrink-0 ${className}`}
      >
        <Image src={src} alt={modelSlug} width={size} height={size} unoptimized />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={modelSlug}
      width={size}
      height={size}
      unoptimized
      className={`shrink-0 ${className}`}
    />
  );
}

export function PairEmblem({
  modelSlug,
  providerSlug,
  size = "md",
}: {
  modelSlug: string;
  providerSlug: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg"
      ? { box: 46, model: 26, badge: 20, prov: 12 }
      : size === "sm"
        ? { box: 32, model: 18, badge: 15, prov: 9 }
        : { box: 38, model: 22, badge: 18, prov: 11 };

  return (
    <div
      style={{ width: dims.box, height: dims.box }}
      className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#171922] to-[#0c0d11] border border-white/[0.11] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] shrink-0"
    >
      <ModelIcon modelSlug={modelSlug} size={dims.model} />
      <span
        style={{ width: dims.badge, height: dims.badge }}
        className="absolute -bottom-1 -right-1 inline-flex items-center justify-center rounded-full bg-[#060608] border border-white/[0.18] shadow-md"
      >
        <ProviderIcon providerSlug={providerSlug} size={dims.prov} />
      </span>
    </div>
  );
}
