"use client";

import { FileText, Image as ImageIcon, Video, Volume2 } from "lucide-react";
import type { InputModality, OutputModality } from "@/lib/catalog";

const LABELS: Record<string, string> = {
  text: "Text",
  image: "Image",
  video: "Video",
  audio: "Audio",
  pdf: "PDF",
  embedding: "Embedding",
};

export function ModalityIcons({
  modalities,
}: {
  modalities: (InputModality | OutputModality)[];
}) {
  return (
    <div className="inline-flex items-center gap-1">
      {modalities.map((m) => (
        <span
          key={m}
          title={LABELS[m] ?? m}
          aria-label={LABELS[m] ?? m}
          className="inline-flex items-center justify-center w-[19px] h-[19px] rounded-[4px] border border-white/[0.16] text-[#8b909a]"
        >
          {m === "text" && (
            <span className="font-mono text-[10px] font-semibold leading-none">T</span>
          )}
          {m === "image" && <ImageIcon className="w-2.5 h-2.5" />}
          {m === "video" && <Video className="w-2.5 h-2.5" />}
          {m === "audio" && <Volume2 className="w-2.5 h-2.5" />}
          {m === "pdf" && <FileText className="w-2.5 h-2.5" />}
          {m === "embedding" && (
            <span className="font-mono text-[9px] font-semibold leading-none">E</span>
          )}
        </span>
      ))}
    </div>
  );
}
