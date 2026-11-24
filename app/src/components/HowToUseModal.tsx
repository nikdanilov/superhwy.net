"use client";

import { X } from "lucide-react";
import { CopyButton } from "./CopyButton";

const ENDPOINTS = [
  {
    path: "/api.json",
    cmd: "curl https://superhwy.net/api.json",
    desc: "Provider-grouped JSON catalog of all models, limits, modalities, and pricing.",
  },
  {
    path: "/models.json",
    cmd: "curl https://superhwy.net/models.json",
    desc: "Provider-agnostic canonical model specs, limits, weights, and capabilities.",
  },
  {
    path: "/api/v1/models",
    cmd: "curl https://superhwy.net/api/v1/models",
    desc: "OpenAI-compatible /v1/models catalog list.",
  },
];

export function HowToUseModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="How to use superhwy.net"
        className="w-full max-w-lg rounded-xl bg-[#0c0d11] border border-white/[0.12] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#f4f4f2]">
            How to use
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded text-[#8b909a] hover:text-white hover:bg-white/[0.06] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-5 text-sm text-[#c8ccd4]">
          <p className="text-xs text-[#8b909a] leading-relaxed">
            <strong className="text-[#f4f4f2]">superhwy.net</strong> is an open-source database of
            Superintelligence — model specs, modalities, pricing, and verified providers. Pull the
            live JSON directly from any CLI, agent, or SDK.
          </p>

          <div className="space-y-3">
            {ENDPOINTS.map((ep) => (
              <div
                key={ep.path}
                className="rounded-lg bg-[#060608] border border-white/[0.08] p-3 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={ep.path}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[#f4f4f2] underline decoration-white/25 hover:decoration-white"
                  >
                    {ep.cmd}
                  </a>
                  <CopyButton value={ep.cmd} label={`Copy ${ep.cmd}`} />
                </div>
                <p className="text-[11.5px] text-[#8b909a]">{ep.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-3 border-t border-white/[0.08] bg-[#060608]/60 flex items-center justify-between text-xs text-[#8b909a] font-mono">
          <a
            href="https://github.com/nikdanilov/superhwy.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f4f4f2] underline decoration-white/20 hover:decoration-white transition-colors"
          >
            github.com/nikdanilov/superhwy.net
          </a>
          <span>MIT</span>
        </div>
      </div>
    </div>
  );
}
