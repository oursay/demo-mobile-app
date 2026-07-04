import { notFound } from "next/navigation";
import { DETAIL_BY_ID } from "@/lib/mock";
import type { RecordKind } from "@/lib/types";
import { PostView } from "@/views/PostView";

/** Shared page factory — one route segment per record kind. */
export function createRecordPage(kind: RecordKind) {
  return async function RecordPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
    const entry = DETAIL_BY_ID[id];
    if (!entry || entry.post.kind !== kind) notFound();
    return <PostView id={id} kind={kind} />;
  };
}

/**
 * Enumerate every record id of one kind for static export
 * (`generateStaticParams`). Each dynamic record route pre-renders exactly the
 * ids present in the mock corpus.
 */
export function createRecordParams(kind: RecordKind) {
  return function generateStaticParams(): { id: string }[] {
    return Object.entries(DETAIL_BY_ID)
      .filter(([, entry]) => entry.post.kind === kind)
      .map(([id]) => ({ id }));
  };
}
