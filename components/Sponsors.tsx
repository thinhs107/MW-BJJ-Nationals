"use client";

import Image from "next/image";

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  tier: "presenting" | "title" | "gold" | "partner";
}

const defaultSponsors: Sponsor[] = [
  { name: "Energy Control", logo: "/sponsors/energy-control.png", url: "https://www.energycontrolky.com/", tier: "presenting" },
  // { name: "Another Sponsor", logo: "/sponsors/other.png", tier: "title" },
];

function SponsorCard({
  sponsor,
  size,
}: {
  sponsor: Sponsor;
  size: "xl" | "lg" | "md" | "sm";
}) {
  const height = {
    xl: "h-56 sm:h-72",
    lg: "h-40 sm:h-52",
    md: "h-24 sm:h-28",
    sm: "h-14 sm:h-16",
  }[size];

  const content = (
    <div className="bg-[var(--white)]">
      {(size === "xl" || size === "lg") && (
        <div className="h-1.5" style={{ background: "var(--red)" }} />
      )}
      <div
        className={`sponsor-card-pad relative w-full ${height} flex items-center justify-center
          ${size === "md" || size === "sm" ? "grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" : ""}`}
      >
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          className="object-contain p-4"
          sizes={size === "xl" ? "(max-width: 640px) 95vw, 700px" : size === "lg" ? "(max-width: 640px) 90vw, 480px" : "200px"}
        />
      </div>
    </div>
  );

  return sponsor.url ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" aria-label={sponsor.name} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

export default function Sponsors({
  sponsors = defaultSponsors,
}: {
  sponsors?: Sponsor[];
}) {
  const presenting = sponsors.filter((s) => s.tier === "presenting");
  const title = sponsors.filter((s) => s.tier === "title");
  const gold = sponsors.filter((s) => s.tier === "gold");
  const partner = sponsors.filter((s) => s.tier === "partner");

  if (sponsors.length === 0) return null;

  return (
    <section id="sponsors" className="sponsors-wrap">
      <div className="section-header-wrap text-center">
        <span
          className="text-xs font-bold uppercase tracking-[0.25em]"
          style={{ color: "var(--red)" }}
        >
          In Our Corner
        </span>
        <h2
          className="text-4xl sm:text-5xl mt-2"
          style={{ fontFamily: "var(--font-bebas), cursive", color: "var(--black)" }}
        >
          Tournament Sponsors
        </h2>
      </div>

      {presenting.length > 0 && (
        <div className="max-w-2xl mx-auto mb-6">
          {presenting.map((s) => (
            <SponsorCard key={s.name} sponsor={s} size="xl" />
          ))}
        </div>
      )}

      {title.length > 0 && (
        <div
          className={`mb-[2px] ${title.length === 1 ? "max-w-xl mx-auto" : "sponsors-title-grid"}`}
        >
          {title.map((s) => (
            <SponsorCard key={s.name} sponsor={s} size="lg" />
          ))}
        </div>
      )}

      {gold.length > 0 && (
        <div className="sponsors-gold-grid mb-[2px]">
          {gold.map((s) => (
            <SponsorCard key={s.name} sponsor={s} size="md" />
          ))}
        </div>
      )}

      {partner.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-8 pt-10">
          {partner.map((s) => (
            <div key={s.name} className="w-28">
              <SponsorCard sponsor={s} size="sm" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}