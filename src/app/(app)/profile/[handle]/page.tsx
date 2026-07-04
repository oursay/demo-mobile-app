import { ProfileView } from "@/views/ProfileView";
import { PROFILES_BY_HANDLE } from "@/lib/mock";

export function generateStaticParams(): { handle: string }[] {
  return Object.keys(PROFILES_BY_HANDLE).map((handle) => ({ handle }));
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  return <ProfileView handle={handle} />;
}
