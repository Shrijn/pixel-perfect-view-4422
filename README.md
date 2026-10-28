# Happy Spaces Infra Management Services

Official web application for **Happy Spaces Infra Management Services**, offering premium office spaces, commercial leasing, coworking setups, and customized office interior solutions across Bengaluru.

**Live Application**: [https://pixel-perfect-view-4422.vercel.app](https://pixel-perfect-view-4422.vercel.app)  
**Lovable Project**: [Lovable Editor](https://lovable.dev/projects/a18ce0b1-0b19-421e-91ea-74cd5b9f9634)

---

## 🏢 About the Project

Happy Spaces Infra helps startups, enterprises, and independent teams find and configure ideal workspaces in Bengaluru (HSR Layout, Koramangala, and beyond). This website showcases commercial properties and provides a direct lead-generation funnel.

### Key Offerings
- **Fully Furnished Offices**: Ready-to-move plug-and-play spaces.
- **Semi-Furnished & Bare Shell Offices**: Flexible configurations ready for custom fit-outs.
- **Managed Offices & Coworking**: Scalable desks and private cabins for modern teams.
- **Commercial Leasing & Interior Solutions**: End-to-end consulting and execution.

---

## ✨ Features

- **Pixel-Perfect Modern UI**: Clean design system built with custom OKLCH tokens and Tailwind CSS v4.
- **Google Sheets Lead Capture**: The interactive contact form submits directly to a Google Sheet via a Google Apps Script Web App in real time.
- **Stateful Form Feedback**: Instant feedback including loading state spinners, submission confirmation, and graceful error handling.
- **Mobile Responsive**: Fully adaptive navigation and layouts tailored for mobile, tablet, and desktop viewports.
- **SEO & Social Metadata**: Rich OpenGraph tags, page titles, and descriptions configured across all routes.

---

## 📊 Google Sheets Lead Integration

Enquiries submitted through the `/contact` form are routed to Google Sheets using Google Apps Script:

1. **User Submits Form**: User inputs Name, Phone number, Workspace requirement, and Message details.
2. **Payload**: Sent via POST request to the Google Apps Script Web App endpoint.
3. **Google Apps Script**: Appends a row containing timestamp, contact details, requirement, and message into the connected Google Sheet.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend / Lead Capture**: Google Apps Script & Google Sheets

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Shrijn/pixel-perfect-view-4422.git

# Navigate to project folder
cd pixel-perfect-view-4422

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
# Build production bundle
npm run build

# Preview build locally
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets (favicons, robots.txt)
├── src/
│   ├── assets/             # Brand logos and imagery
│   ├── components/         # Shared site chrome (SiteHeader, SiteFooter) & UI primitives
│   ├── data/               # Services list and brand assets configuration
│   ├── routes/             # TanStack file-based routes
│   │   ├── __root.tsx      # Root route layout with header/footer
│   │   ├── index.tsx       # Homepage
│   │   ├── services.tsx    # Services catalog
│   │   ├── about.tsx       # About company
│   │   └── contact.tsx     # Contact & lead capture form
│   ├── styles.css          # Design system tokens and custom utilities
│   └── start.ts            # Application bootstrap
└── package.json
```

---

## 🔗 Lovable Integration

This project is connected to [Lovable](https://lovable.dev). Pushing commits to the `main` branch automatically syncs changes back into the Lovable project editor.
