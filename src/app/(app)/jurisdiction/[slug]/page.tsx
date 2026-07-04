import { JurisdictionView } from "@/views/JurisdictionView";
import { ALL_JURISDICTIONS } from "@/lib/mock";
import { jurisdictionSlug } from "@/lib/routes";

export function generateStaticParams(): { slug: string }[] {
  return ALL_JURISDICTIONS.map((name) => ({ slug: jurisdictionSlug(name) }));
}

export default async function JurisdictionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <JurisdictionView slug={slug} />;
}
