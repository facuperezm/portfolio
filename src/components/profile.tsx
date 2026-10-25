import Image from "next/image";

import { siteConfig } from "@/config/site";
import Section from "@/components/section-animate";
import TextLink from "@/components/text-link";

export default function Profile() {
  return (
    <Section className="pt-16 sm:pt-24">
      <header className="mb-10 flex items-center gap-4">
        <Image
          alt="Profile picture of Facundo Perez Montalvo"
          src="/profile.avif"
          className="size-12 rounded-full object-cover"
          width={48}
          height={48}
          priority
        />
        <div>
          <h1 className="font-medium">{siteConfig.name}</h1>
          <p className="text-muted-foreground">{siteConfig.title}</p>
        </div>
      </header>

      <div className="text-foreground/85 space-y-5 leading-7">
        <p>
          Building product UI at{" "}
          <TextLink href="https://svitla.com">Svitla Systems</TextLink>. I led
          a platform-wide migration to Next.js, shipped an AI-powered story
          creation pipeline, and now guide frontend standards and architecture
          across teams.
        </p>
        <p>
          I care about interfaces that feel considered in production:
          accessible components, consistent design systems, and fast pages.
          Based in Argentina, working remotely in English.
        </p>
        <p>
          Open to senior frontend roles on product-focused teams. Read my{" "}
          <TextLink href="/resume">resume</TextLink> or{" "}
          <TextLink href={siteConfig.links.email}>send me an email</TextLink>.
        </p>
      </div>
    </Section>
  );
}
