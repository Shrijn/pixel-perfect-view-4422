import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { logoUrl } from "@/data/brand-assets";
import { WhatsAppIcon } from "@/components/site-whatsapp";
import { getWhatsAppUrl } from "@/data/whatsapp";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src={logoUrl} alt="Happy Spaces Infra Management Services" className="h-auto w-44 max-w-full" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Office spaces, coworking, commercial leasing and interior solutions in Bengaluru.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Explore</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/services" className="transition-colors hover:text-primary">Services</Link>
            <Link to="/about" className="transition-colors hover:text-primary">About us</Link>
            <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Reach us</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <span className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" /> <a href="tel:+919731211076" className="hover:text-primary">+91 97312 11076</a>
            </span>
            <span className="flex items-start gap-2">
              <span className="mt-0.5 size-4 shrink-0 text-[#25D366] flex items-center justify-center">
                <WhatsAppIcon className="size-4" />
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                +91 97312 11076 (WhatsApp)
              </a>
            </span>
            <span className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" /> <a href="mailto:vijay@happyspacesinfra.in" className="break-all hover:text-primary">vijay@happyspacesinfra.in</a>
            </span>
            <span className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" /> <span>2nd floor, 451, 17th Cross Rd, Sector 4, HSR Layout, Bengaluru, Karnataka 560102</span>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Happy Spaces Infra Management Services. All rights reserved.
      </div>
    </footer>
  );
}
