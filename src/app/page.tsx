import Link from "next/link";

// The civic app lives under the (app) route group; the unified feed is home.
// A static host (GitHub Pages) can't issue an HTTP 301, so redirect via a
// hoisted meta-refresh — it fires instantly and needs no JavaScript. The link
// is the no-JS / no-meta fallback.
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/feed/" />
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <Link href="/feed">Continue to OurSay</Link>
      </div>
    </>
  );
}
