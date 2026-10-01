import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Flag, Gem } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Who we are: a facility management company built on trained people, documented processes and transparent reporting.",
      },
      { property: "og:title", content: "About — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "A facility management partner focused on trained people and measurable service.",
      },
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

      <section className="bg-surface">
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
