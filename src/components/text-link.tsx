import Link from "next/link";

import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export default function TextLink({ href, className, children }: TextLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={cn(
        "text-foreground decoration-foreground/25 hover:decoration-foreground underline underline-offset-4 transition-colors duration-200",
        className,
      )}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}
