import logo from "@/assets/happy-logo-transparent.png.asset.json";

// Custom-domain hosting does not expose Lovable's asset-serving path.
export const logoUrl = new URL(logo.url, "https://pixel-perfect-view-4422.lovable.app").href;