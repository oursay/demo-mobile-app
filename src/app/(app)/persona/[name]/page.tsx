import { PersonaView } from "@/views/PersonaView";
import { allPersonaNames } from "@/lib/api";

export function generateStaticParams(): { name: string }[] {
  return allPersonaNames().map((name) => ({ name }));
}

export default async function PersonaPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <PersonaView personaName={decodeURIComponent(name)} />;
}

