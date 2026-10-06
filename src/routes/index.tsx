import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Spaces Infra — Office Spaces in Bengaluru" },
      {
        name: "description",
        content:
          "Discover furnished and bare shell offices, managed offices, coworking spaces, commercial leasing and office interiors in Bengaluru.",
      },
      { property: "og:title", content: "Happy Spaces Infra — Office Spaces in Bengaluru" },
      {
        property: "og:description",
        content:
          "Explore office spaces, coworking, commercial leasing and interior solutions in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="eyebrow">Commercial real estate · Bengaluru</span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Happy Spaces Infra
              <span className="block text-primary">Office spaces for your next chapter.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Find a workspace that fits your business. Explore furnished, semi-furnished and bare shell offices,
              managed offices, coworking spaces and commercial leasing in Bengaluru.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-brand">
                Enquire about a space <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="btn-outline-brand">
                See all services
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Illustrative image of a modern furnished office workspace"
              width={1600}
              height={1008}
              className="relative rounded-lg object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="section">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Find the right fit for your work
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
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

      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-3xl bg-[image:var(--gradient-brand)] px-8 py-14 text-center shadow-[var(--shadow-brand-lg)]">
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Looking for your next office?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/85">
            Tell us what you need, and ask about current options in Bengaluru.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
