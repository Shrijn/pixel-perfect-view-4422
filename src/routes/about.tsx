import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import coworkingImage from "@/assets/coworking-hsr.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Meet Happy Spaces Infra: office spaces, commercial leasing and our first coworking branch in HSR Layout, Bengaluru.",
      },
      { property: "og:title", content: "About — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "Discover office spaces and our first coworking branch in HSR Layout, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="section py-16">
          <span className="eyebrow">About us</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Spaces designed around work
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Happy Spaces Infra Management Services helps businesses discover office spaces in Bengaluru.
            Whether you need a furnished workspace, a bare shell to build your own, a managed office
            or a coworking space, we want to help you find the right setting for your team.
          </p>
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

    </>
  );
}
