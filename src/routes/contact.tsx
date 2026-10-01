import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Request a free site visit or facility management proposal for your apartment, office or commercial property.",
      },
      { property: "og:title", content: "Contact — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "Tell us about your property and we'll share a tailored facility management proposal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Property: ${data.get("property")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:vijay@happyspacesinfra.in?subject=${encodeURIComponent(
      "Facility management enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <section className="section">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Let's look at your property
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Share a few details and our team will arrange a free site visit, then send a scope and
            pricing proposal within two working days.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href="tel:+919731211076" className="flex items-center gap-3 text-foreground">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                <Phone className="size-4 text-primary" />
              </span>
              +91 97312 11076
            </a>
            <a href="mailto:vijay@happyspacesinfra.in" className="flex items-center gap-3 break-all text-foreground">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                <Mail className="size-4 text-primary" />
              </span>
              vijay@happyspacesinfra.in
            </a>
            <div className="flex items-start gap-3 text-foreground">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                <MapPin className="size-4 text-primary" />
              </span>
              <span className="pt-2">2nd floor, 451, 17th Cross Rd, Sector 4, HSR Layout, Bengaluru, Karnataka 560102</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-surface p-7">
          <div className="grid gap-4">
            <input name="name" required placeholder="Your name" className={field} />
            <input name="phone" required placeholder="Phone number" className={field} />
            <input name="property" placeholder="Property name / type" className={field} />
            <textarea
              name="message"
              rows={5}
              placeholder="What do you need help with?"
              className={field}
            />
            <Button type="submit" className="btn-brand w-full">
              Send enquiry <Send className="size-4" />
            </Button>
            {sent && (
              <p className="text-center text-sm font-medium text-primary">
                Thanks! Your email app should open with the enquiry ready to send.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
