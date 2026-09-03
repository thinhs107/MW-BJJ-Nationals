"use client";

import Image from "next/image";

export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  tier: "Legacy" | "Gold" | "Silver" | "Bronze" | "partner";
}

const defaultSponsors: Sponsor[] = [
  { name: "Energy Control", logo: "/sponsors/energy-control.png", url: "https://www.energycontrolky.com/", tier: "Legacy" },
  { name: "HIGHVIBE METTAVERSE", logo: "/sponsors/Highvibe-silver-sponsor.jpg", url: "https://www.highvibemettaverse.com/", tier: "Silver" },
  { name: "LuLiFi", logo: "/sponsors/LuLiFi-Logo.jpg", url: "https://www.lulifi.com/", tier: "partner" },
];

const tierLabels: Record<Sponsor["tier"], string> = {
  Legacy: "Legacy Sponsor",
  Gold: "Gold Sponsors",
  Silver: "Silver Sponsors",
  Bronze: "Bronze Sponsors",
  partner: "Partners",
};

function TierLabel({ tier }: { tier: Sponsor["tier"] }) {
  return (
    <div className="text-center mb-3">
      <span
        className="text-xs font-bold uppercase tracking-[0.25em]"
        style={{ color: "var(--red)" }}
      >
        {tierLabels[tier]}
      </span>
    </div>
  );
}

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
  const Legacy = sponsors.filter((s) => s.tier === "Legacy");
  const Gold = sponsors.filter((s) => s.tier === "Gold");
  const Silver = sponsors.filter((s) => s.tier === "Silver");
  const Bronze = sponsors.filter((s) => s.tier === "Bronze");
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

      {Legacy.length > 0 && (
        <div className="max-w-2xl mx-auto mb-6">
          <TierLabel tier="Legacy" />
          {Legacy.map((s) => (
            <SponsorCard key={s.name} sponsor={s} size="xl" />
          ))}
        </div>
      )}

      {Gold.length > 0 && (
        <div className="max-w-2xl mx-auto mb-6">
          <TierLabel tier="Gold" />
          <div
            className={Gold.length === 1 ? "" : "sponsors-Silver-grid"}
          >
            {Gold.map((s) => (
              <SponsorCard key={s.name} sponsor={s} size="lg" />
            ))}
          </div>
        </div>
      )}

      {Silver.length > 0 && (
        <div className="mb-[2px]">
          <TierLabel tier="Silver" />
          <div
            className={Silver.length === 1 ? "max-w-xl mx-auto" : "sponsors-Silver-grid"}
          >
            {Silver.map((s) => (
              <SponsorCard key={s.name} sponsor={s} size="lg" />
            ))}
          </div>
        </div>
      )}

      {Bronze.length > 0 && (
        <div className="mb-[2px]">
          <TierLabel tier="Bronze" />
          <div className="sponsors-Bronze-grid">
            {Bronze.map((s) => (
              <SponsorCard key={s.name} sponsor={s} size="md" />
            ))}
          </div>
        </div>
      )}

      {partner.length > 0 && (
        <div className="pt-10">
          <TierLabel tier="partner" />
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partner.map((s) => (
              <div key={s.name} className="w-56">
                <SponsorCard sponsor={s} size="lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}