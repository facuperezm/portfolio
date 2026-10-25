import { experienceEntries } from "@/config/career";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import Profile from "@/components/profile";
import Section from "@/components/section-animate";
import TextLink from "@/components/text-link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-xl">
      <Profile />

      <Section id="experience" delay={0.1}>
        <h2 className="text-muted-foreground mb-6">Experience</h2>

        <ol className="space-y-8">
          {experienceEntries.map((entry) => (
            <li key={entry.company}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">
                  {entry.url ? (
                    <TextLink href={entry.url}>{entry.company}</TextLink>
                  ) : (
                    entry.company
                  )}
                </h3>
                <span className="text-muted-foreground shrink-0 text-sm tabular-nums">
                  {entry.timeframe}
                </span>
              </div>
              <p className="text-muted-foreground">{entry.role}</p>
              <p className="text-foreground/85 mt-2 leading-7">
                {entry.summary}
              </p>
              {entry.highlights ? (
                <ul className="text-foreground/85 mt-3 list-disc space-y-2 pl-5 leading-7 marker:text-muted-foreground/60">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="contact" delay={0.2}>
        <h2 className="text-muted-foreground mb-6">Connect</h2>
        <p className="text-foreground/85 leading-7">
          Reach me at{" "}
          <TextLink href={siteConfig.links.email}>
            facundoperezmontalvo@gmail.com
          </TextLink>{" "}
          or on <TextLink href={siteConfig.links.linkedin}>LinkedIn</TextLink>.
          Code lives on{" "}
          <TextLink href={siteConfig.links.github}>GitHub</TextLink>, and the
          full history is in my <TextLink href="/resume">resume</TextLink>.
        </p>
      </Section>

      <Footer />
    </div>
  );
}
