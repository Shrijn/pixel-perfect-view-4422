import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-facility.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Spaces Infra — Facility Management Services" },
      {
        name: "description",
        content:
          "Housekeeping, security, technical maintenance and landscaping for apartments, offices and commercial properties.",
      },
      { property: "og:title", content: "Happy Spaces Infra — Facility Management Services" },
      {
        property: "og:description",
        content:
          "Integrated facility management with trained teams, clear SLAs and a dedicated site manager.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "50+", label: "Properties served" },
  { value: "400+", label: "Trained staff" },
  { value: "24x7", label: "Support desk" },
  { value: "98%", label: "Client retention" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified, trained people",
    text: "Every team member is background-checked, uniformed and trained before stepping on site.",
  },
  {
    icon: Clock,
    title: "Response you can time",
    text: "Complaints are logged, assigned and closed within agreed turnaround times — no chasing.",
  },
  {
    icon: HeartHandshake,
    title: "One accountable partner",
    text: "A dedicated site manager owns housekeeping, security, technical and gardening under one contract.",
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="eyebrow">Facility management, done right</span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Spaces that stay
              <span className="block text-primary">clean, safe and happy.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Happy Spaces Infra Management Services runs housekeeping, security, technical
              maintenance and landscaping for apartment communities, offices and commercial
              buildings — with trained teams and transparent reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">
                Get a free site visit <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-outline-brand">
                See all services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-extrabold text-primary">{s.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 hidden size-40 rounded-full bg-brand-yellow/40 blur-2xl md:block" />
            <img
              src={heroImage}
              alt="Facility management team at a commercial building entrance"
              width={1600}
              height={1008}
              className="relative rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="section">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Every service your property needs
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <s.icon className="size-7 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="btn-brand">
              Explore services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">Why us</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Built on people, process and proof
            </h2>
            <p className="mt-4 text-muted-foreground">
              We take over the day-to-day running of your premises so your committee or admin team
              can stop firefighting. Clear SOPs, measurable checklists and monthly reports keep
              everyone aligned.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Statutory-compliant staffing and payroll",
                "Monthly MIS and asset reports",
                "Trained supervisors on every shift",
                "Transparent, itemised billing",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-primary" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-card p-6">
                <r.icon className="size-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-[image:var(--gradient-brand)] px-8 py-14 text-center shadow-[var(--shadow-brand-lg)]">
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Ready for a happier space?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85">
            Tell us about your property and we'll visit, assess and share a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
          >
            Request a proposal <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
