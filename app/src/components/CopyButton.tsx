"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({
  value,
  label,
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={label ?? `Copy ${value}`}
      title={copied ? "Copied" : (label ?? "Copy")}
      className={`inline-flex items-center justify-center p-1 rounded text-[#717682] hover:text-[#f4f4f2] hover:bg-white/[0.06] transition-colors cursor-pointer ${className}`}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#14f1b2]" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
