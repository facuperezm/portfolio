import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="text-muted-foreground mt-8 flex items-center justify-between py-10 text-sm">
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.repo}
          className="hover:text-foreground transition-colors duration-200"
        >
          Source
        </Link>
        <Link
          href="/privacy"
          className="hover:text-foreground transition-colors duration-200"
        >
          Privacy
        </Link>
      </div>
      <span className="tabular-nums">{new Date().getFullYear()}</span>
    </footer>
  );
}
