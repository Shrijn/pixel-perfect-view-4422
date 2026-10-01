import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Flag, Gem, MapPin } from "lucide-react";
import coworkingImage from "@/assets/coworking-hsr.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Meet Happy Spaces Infra: facility management services and our own coworking space in HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "About — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "Discover our people-first facility management and our first coworking branch in HSR Layout, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Flag,
    title: "Our mission",
    text: "To take the daily burden of property upkeep off our clients with dependable, well-trained teams.",
  },
  {
    icon: Eye,
    title: "Our vision",
    text: "To be the facility partner communities recommend to each other, one happy space at a time.",
  },
  {
    icon: Gem,
    title: "Our values",
    text: "Honesty in billing, dignity for our staff, and service standards we can measure and prove.",
  },
];

const steps = [
  { n: "01", t: "Site visit", d: "We walk your property and understand problem areas, headcount and timings." },
  { n: "02", t: "Proposal", d: "You get a staffing plan, scope of work and itemised pricing — no hidden costs." },
  { n: "03", t: "Mobilisation", d: "Staff are selected, verified, trained on your site's SOPs and deployed." },
  { n: "04", t: "Review", d: "Monthly reports, audits and review meetings keep service levels on track." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="section py-16">
          <span className="eyebrow">About us</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            People-first facility management
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Happy Spaces Infra Management Services was built around a simple belief: a property runs
            well when the people maintaining it are trained, respected and supervised properly. We
            manage housekeeping, security, technical upkeep and landscaping so residents, staff and
            visitors experience a space that simply works.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7">
              <v.icon className="size-7 text-primary" />
              <h2 className="mt-4 font-display text-lg font-bold">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6">
            <div>
              <span className="eyebrow">A space of our own</span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">More than managing spaces. We're creating one.</h2>
            </div>
            <span className="font-display text-5xl font-black text-primary/20" aria-hidden="true">01 / HSR</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14">
            <figure>
              <img src={coworkingImage} alt="Illustration of a contemporary coworking environment" width={1440} height={960} loading="lazy" className="aspect-[3/2] w-full object-cover" />
              <figcaption className="mt-2 text-xs text-muted-foreground">Illustrative image — not a photograph of our HSR branch.</figcaption>
            </figure>
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase text-primary"><MapPin className="size-4" /> HSR Layout · Bengaluru</div>
              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">Our first coworking branch</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">We also provide our own coworking space in Bengaluru. Our first branch is in HSR Layout — an extension of what we believe in: thoughtful spaces where people can do their best work.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Interested in working from our HSR space? Get in touch for the latest availability and details.</p>
              <Link to="/contact" className="btn-brand mt-7">Ask about coworking <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">How we start</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-3xl font-black text-brand-yellow">{s.n}</span>
                <h3 className="mt-2 font-display text-base font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-brand mt-10">
            Start with a site visit <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
