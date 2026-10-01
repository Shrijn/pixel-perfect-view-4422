import {
  Sparkles,
  ShieldCheck,
  Wrench,
  Leaf,
  Bug,
  Droplets,
  Users,
  Building2,
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
    title: "Housekeeping & Deep Cleaning",
    description:
      "Daily upkeep of lobbies, corridors, washrooms and common areas, plus scheduled deep-clean cycles.",
    icon: Sparkles,
    points: ["Trained housekeeping teams", "Checklist-based shifts", "Eco-friendly chemicals"],
  },
  {
    title: "Security & Manpower",
    description:
      "Verified, uniformed guards and supervisors for gate control, patrolling and visitor management.",
    icon: ShieldCheck,
    points: ["Police-verified staff", "Visitor & vehicle logs", "24x7 shift coverage"],
  },
  {
    title: "Technical & MEP Maintenance",
    description:
      "Preventive and breakdown maintenance for electrical, plumbing, HVAC, lifts, DG sets and pumps.",
    icon: Wrench,
    points: ["Planned maintenance calendar", "On-call technicians", "Asset history records"],
  },
  {
    title: "Landscaping & Horticulture",
    description: "Garden design, lawn care and plant maintenance that keep your premises green all year.",
    icon: Leaf,
    points: ["Seasonal planting", "Irrigation upkeep", "Tree trimming"],
  },
  {
    title: "Pest Control & Sanitisation",
    description: "Scheduled pest management and disinfection programmes for healthy, safe interiors.",
    icon: Bug,
    points: ["General & termite control", "Odourless treatments", "Service certificates"],
  },
  {
    title: "Water Tank & Facade Cleaning",
    description: "Specialised cleaning for overhead tanks, sumps, glass facades and high-rise exteriors.",
    icon: Droplets,
    points: ["Certified rope access", "Water quality checks", "Safety-first SOPs"],
  },
  {
    title: "Community & Helpdesk Management",
    description:
      "Front-office support, complaint tracking and resident communication with clear turnaround times.",
    icon: Users,
    points: ["Single point of contact", "Ticket tracking", "Monthly MIS reports"],
  },
  {
    title: "Integrated Facility Management",
    description:
      "One contract covering every service above, managed by a dedicated site manager accountable to you.",
    icon: Building2,
    points: ["Single bill, single team", "SLA-backed delivery", "Cost transparency"],
  },
];
