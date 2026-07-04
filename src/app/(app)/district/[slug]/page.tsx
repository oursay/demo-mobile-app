import { DistrictView } from "@/views/DistrictView";
import { ALBERTA_RIDINGS } from "@/lib/mock";

export function generateStaticParams(): { slug: string }[] {
  return ALBERTA_RIDINGS.map((riding) => ({ slug: riding.slug }));
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DistrictView slug={slug} />;
}
