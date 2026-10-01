import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Explore fully furnished, semi-furnished and bare shell offices, managed offices, coworking spaces, commercial leasing and office interiors in Bengaluru.",
      },
      { property: "og:title", content: "Services — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "Explore office spaces, coworking, commercial leasing and office interior solutions in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="section py-16">
          <span className="eyebrow">Our services</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            The right space for the way you work
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From ready-to-use offices to spaces you can shape yourself, explore the workplace
            options and services offered by Happy Spaces Infra in Bengaluru.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="rounded-lg border border-border bg-card p-7">
              <div className="flex size-12 items-center justify-center rounded-md bg-accent">
                <s.icon className="size-6 text-primary" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="section">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Looking for a space in Bengaluru?</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Tell us what kind of office or workspace you have in mind.</p>
          <Link to="/contact" className="btn-brand mt-8">
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
