import { MODELS } from "@/lib/catalog";
import { ModelsTable } from "@/components/ModelsTable";

export default function HomePage() {
  return <ModelsTable models={MODELS} />;
}
