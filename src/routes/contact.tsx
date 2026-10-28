import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site-whatsapp";
import { getWhatsAppUrl } from "@/data/whatsapp";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyocm6FRkqzhF_Aifc9btu5GAXT7OGlSy4rTFi0Racvi6WQtM656T4Y_3S1xabxQquo-Q/exec";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Happy Spaces Infra Management" },
      {
        name: "description",
        content:
          "Contact Happy Spaces Infra about office spaces, commercial leasing, coworking and office interior solutions in Bengaluru.",
      },
      { property: "og:title", content: "Contact — Happy Spaces Infra Management" },
      {
        property: "og:description",
        content: "Tell us about the office space or workspace you're looking for in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      property: String(data.get("property") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Something went wrong while submitting. Please try again or reach out to us at vijay@happyspacesinfra.in."
      );
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary disabled:opacity-60";

  return (
    <section className="section">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Let's find your space
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tell us what kind of office or workspace you are looking for in Bengaluru.
            We’ll get back to you about available options.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a href="tel:+919731211076" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                <Phone className="size-4 text-primary" />
              </span>
              +91 97312 11076
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-[#25D366] transition-colors"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-[#25D366]">
                <WhatsAppIcon className="size-5" />
              </span>
              +91 97312 11076 (WhatsApp Chat)
            </a>
            <a href="mailto:vijay@happyspacesinfra.in" className="flex items-center gap-3 break-all text-foreground hover:text-primary transition-colors">
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
            <input
              name="name"
              required
              disabled={loading}
              placeholder="Your name"
              className={field}
            />
            <input
              name="phone"
              type="tel"
              required
              disabled={loading}
              placeholder="Phone number"
              className={field}
            />
            <input
              name="property"
              disabled={loading}
              placeholder="Office or workspace requirement"
              className={field}
            />
            <textarea
              name="message"
              rows={5}
              disabled={loading}
              placeholder="What do you need help with?"
              className={field}
            />
            <Button type="submit" disabled={loading} className="btn-brand w-full cursor-pointer">
              {loading ? (
                <>
                  Sending enquiry... <Loader2 className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  Send enquiry <Send className="size-4" />
                </>
              )}
            </Button>
            {status === "success" && (
              <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-200">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <div className="text-left">
                  <p className="text-sm font-bold">Enquiry sent successfully!</p>
                  <p className="mt-0.5 text-xs opacity-90">
                    Thank you for reaching out. We will review your requirement and get back to you shortly.
                  </p>
                </div>
              </div>
            )}
            {status === "error" && (
              <p className="text-center text-sm font-medium text-destructive">
                {errorMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
