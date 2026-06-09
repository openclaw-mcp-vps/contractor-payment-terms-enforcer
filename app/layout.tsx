import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayEnforcer – Automate Payment Follow-ups for Freelance Invoices",
  description: "Track invoice due dates, send automated payment reminders, and escalate to collections. Built for freelancers and small service businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7c849213-1385-484b-bac5-9a39523fbad9"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
