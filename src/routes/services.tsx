import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Housekeeping, security, MEP maintenance, landscaping, pest control, tank cleaning and integrated facility management.",
      },
      { property: "og:title", content: "Services — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "Every facility service your property needs, delivered under one accountable contract.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const sectors = [
  "Apartment & villa communities",
  "Corporate offices and IT parks",
  "Retail stores and malls",
  "Hospitals and clinics",
  "Schools and institutions",
  "Warehouses and factories",
];

function ServicesPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="section py-16">
          <span className="eyebrow">Our services</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            One team for every corner of your property
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Pick individual services or hand over the entire site. Either way you get trained staff,
            documented processes and a supervisor who answers the phone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent">
                <s.icon className="size-6 text-primary" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="size-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Where we work</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <div
                key={s}
                className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium"
              >
                {s}
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-brand mt-10">
            Discuss your requirement <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
