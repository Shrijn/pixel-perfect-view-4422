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
};

export const services: Service[] = [
  {
    title: "Fully Furnished Offices",
    description:
      "Office spaces with furnishings already in place, for businesses looking for a ready-to-use workplace.",
    icon: Armchair,
  },
  {
    title: "Semi-Furnished Offices",
    description:
      "A practical starting point for businesses that want an office with room to make it their own.",
    icon: PanelsTopLeft,
  },
  {
    title: "Bare Shell Office Spaces",
    description:
      "An open canvas for businesses planning a workspace tailored to their layout and identity.",
    icon: Building,
  },
  {
    title: "Managed Offices",
    description: "Explore a more supported office setup without starting from a completely empty space.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Coworking Spaces",
    description: "Shared workspaces for people and teams who want a place to work alongside others.",
    icon: UsersRound,
  },
  {
    title: "Commercial Leasing",
    description: "Find a commercial space that fits the way your business works in Bengaluru.",
    icon: KeyRound,
  },
  {
    title: "Office Interior Solutions",
    description: "Plan an office interior that reflects your business and makes the space work for your team.",
    icon: DraftingCompass,
  },
];
