export const WHATSAPP_CONFIG = {
  phoneNumber: "919731211076",
  displayPhone: "+91 97312 11076",
  email: "vijay@happyspacesinfra.in",
  companyName: "Happy Spaces Infra",
  tagline: "Let’s find your perfect space!",
  responseNote: "Typically replies in minutes",

  // The official welcome message provided for the chat widget
  welcomeMessage: `👋 Hello! Welcome to Happy Spaces Infra 🏡

Thank you for reaching out to us!

We’re delighted to assist you with office space and property requirements.

Please let us know how we can help you, and our team will get back to you shortly.

📩 You can also visit our website: https://www.happyspacesinfra.in/

Thank you for choosing Happy Spaces Infra — Let’s find your perfect space! ✨`,

  // Quick prompt options for visitors
  quickPrompts: [
    "Hi, I am looking for managed office space in Bengaluru.",
    "Hi, I want to inquire about coworking spaces.",
    "Hi, I need assistance with commercial leasing.",
    "Hi, I'm interested in office interior solutions.",
  ],

  // Default pre-filled message when starting chat on WhatsApp
  defaultInquiryMessage:
    "Hi Happy Spaces Infra, I would like to inquire about office space and property requirements.",
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = (customMessage && customMessage.trim().length > 0)
    ? customMessage.trim()
    : WHATSAPP_CONFIG.defaultInquiryMessage;
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(message)}`;
}

