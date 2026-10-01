import {
  Armchair,
  PanelsTopLeft,
  Building,
  BriefcaseBusiness,
  UsersRound,
  KeyRound,
  DraftingCompass,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Fully Furnished Offices",
    description:
      "Office spaces with furnishings already in place, for businesses looking for a ready-to-use workplace.",
    icon: Armchair,
    points: ["Furnished workspace", "Business-ready setting", "Options in Bengaluru"],
  },
  {
    title: "Semi-Furnished Offices",
    description:
      "A practical starting point for businesses that want an office with room to make it their own.",
    icon: PanelsTopLeft,
    points: ["Flexible setup", "Space to personalise", "Office space options"],
  },
  {
    title: "Bare Shell Office Spaces",
    description:
      "An open canvas for businesses planning a workspace tailored to their layout and identity.",
    icon: Building,
    points: ["Custom layout potential", "Fit-out flexibility", "Space shaped around your needs"],
  },
  {
    title: "Managed Offices",
    description: "Explore a more supported office setup without starting from a completely empty space.",
    icon: BriefcaseBusiness,
    points: ["Managed workspace", "Office-focused setup", "Enquire for current options"],
  },
  {
    title: "Coworking Spaces",
    description: "Shared workspaces for people and teams who want a place to work alongside others.",
    icon: UsersRound,
    points: ["Shared workspace", "For individuals and teams", "First branch in HSR Layout"],
  },
  {
    title: "Commercial Leasing",
    description: "Find a commercial space that fits the way your business works in Bengaluru.",
    icon: KeyRound,
    points: ["Commercial property options", "Space for your business", "Enquire about availability"],
  },
  {
    title: "Office Interior Solutions",
    description: "Plan an office interior that reflects your business and makes the space work for your team.",
    icon: DraftingCompass,
    points: ["Workspace planning", "Interior solutions", "A space that feels like yours"],
  },
];
