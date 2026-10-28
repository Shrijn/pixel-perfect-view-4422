import { useState, useEffect, useRef, type FormEvent } from "react";
import { CheckCheck, Send, Sparkles, X } from "lucide-react";
import { WHATSAPP_CONFIG, getWhatsAppUrl } from "@/data/whatsapp";
import { logoUrl } from "@/data/brand-assets";

export function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SiteWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [userMessage, setUserMessage] = useState(WHATSAPP_CONFIG.defaultInquiryMessage);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Show a gentle greeting notification bubble after 1.8 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Close when pressing Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close when clicking outside of the popup and the button
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!isOpen) return;
      const target = e.target as Node;
      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function handleStartChat(messageToSend?: string) {
    const url = getWhatsAppUrl(messageToSend ?? userMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleStartChat();
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* 1. Subtle Floating Greeting Preview Bubble (shown before user clicks) */}
      {!isOpen && showPrompt && (
        <div
          role="status"
          aria-live="polite"
          className="mb-3 max-w-[270px] sm:max-w-[310px] animate-in fade-in slide-in-from-bottom-3 duration-300 rounded-2xl border border-border bg-card p-3.5 shadow-xl shadow-black/10"
        >
          <div className="flex items-start justify-between gap-2">
            <div
              onClick={() => {
                setIsOpen(true);
                setShowPrompt(false);
              }}
              className="cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Happy Spaces Infra</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                👋 Looking for office space or coworking in Bengaluru? We&apos;re here to help!
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#25D366] group-hover:underline">
                Chat on WhatsApp &rarr;
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowPrompt(false);
              }}
              className="text-muted-foreground hover:text-foreground p-0.5 rounded-md transition-colors"
              aria-label="Dismiss greeting preview"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* 2. Full WhatsApp Chat Popover Window */}
      {isOpen && (
        <div
          ref={popupRef}
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Chat Widget"
          className="mb-3 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[400px] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl shadow-black/20 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex size-11 items-center justify-center rounded-full bg-white/10 p-1.5 backdrop-blur ring-2 ring-white/30">
                  <img
                    src={logoUrl}
                    alt="Happy Spaces Infra"
                    className="size-full object-contain brightness-0 invert"
                  />
                  <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold leading-tight">
                    Happy Spaces Infra
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/90">
                    <span className="size-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>{WHATSAPP_CONFIG.responseNote}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close WhatsApp chat"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Conversation Area with WhatsApp styling */}
          <div className="max-h-[360px] overflow-y-auto bg-muted/40 p-4 space-y-3">
            {/* Timestamp */}
            <div className="text-center">
              <span className="inline-block rounded-full bg-background/80 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground shadow-xs">
                Today
              </span>
            </div>

            {/* Official Default Welcome Message from Happy Spaces Infra */}
            <div className="flex items-start gap-2">
              <div className="relative max-w-[92%] rounded-2xl rounded-tl-sm bg-card p-3.5 text-xs text-foreground shadow-sm border border-border/60">
                <div className="font-semibold text-primary mb-1 flex items-center gap-1">
                  <span>Happy Spaces Team</span>
                  <Sparkles className="size-3 text-amber-500" />
                </div>
                <div className="space-y-2 whitespace-pre-line leading-relaxed">
                  {WHATSAPP_CONFIG.welcomeMessage}
                </div>
                <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
                  <span>Just now</span>
                  <CheckCheck className="size-3.5 text-[#34B7F1]" />
                </div>
              </div>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="pt-1">
              <p className="text-[11px] font-medium text-muted-foreground mb-1.5">
                Quick inquiry options:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {WHATSAPP_CONFIG.quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setUserMessage(prompt);
                      handleStartChat(prompt);
                    }}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-foreground/80 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                  >
                    {prompt.replace(/^Hi,?\s*/i, "")}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer & Chat Input Form */}
          <div className="border-t border-border bg-card p-3">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full rounded-xl border border-border bg-muted/30 px-3.5 py-2.5 text-xs text-foreground outline-none transition-colors focus:border-[#25D366] focus:bg-background pr-9"
                />
                <button
                  type="submit"
                  title="Send via WhatsApp"
                  className="absolute right-2 text-[#25D366] hover:text-[#1ea952] transition-colors p-1"
                >
                  <Send className="size-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleStartChat()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] py-2.5 px-4 text-xs font-bold text-white shadow-md shadow-[#25D366]/30 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="size-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>
            </form>

            <div className="mt-2 text-center text-[10px] text-muted-foreground">
              Official WhatsApp: <a href="tel:+919731211076" className="font-medium text-foreground hover:underline">+91 97312 11076</a>
            </div>
          </div>
        </div>
      )}

      {/* 3. Floating WhatsApp Circular Action Button */}
      <div className="relative group">
        {/* Pulsing ring indicator */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 blur-sm animate-pulse group-hover:opacity-75 transition"
          aria-hidden="true"
        />

        <button
          ref={buttonRef}
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowPrompt(false);
          }}
          className={`relative flex size-14 sm:size-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#20ba59] focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 ${
            isOpen ? "rotate-90" : ""
          }`}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat (+91 97312 11076)"}
          title="Chat with Happy Spaces Infra on WhatsApp (+91 97312 11076)"
        >
          {isOpen ? (
            <X className="size-7 sm:size-8" />
          ) : (
            <WhatsAppIcon className="size-7 sm:size-8" />
          )}

          {/* Unread notification badge */}
          {!isOpen && (
            <span
              className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-destructive text-[11px] font-bold text-white ring-2 ring-background"
              aria-hidden="true"
            >
              1
            </span>
          )}
        </button>

        {/* Desktop Hover Tooltip */}
        {!isOpen && (
          <div className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1 text-xs font-semibold text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 hidden md:block">
            Chat on WhatsApp (+91 97312 11076)
          </div>
        )}
      </div>
    </div>
  );
}
