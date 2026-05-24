import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitZone — GitHub Commit Timezone Tracker",
  description: "Track developer productivity across timezones for remote teams. Analyze GitHub commits to find peak hours and optimal meeting times."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="73f4db8b-e897-41c5-a033-0a7c555b5b24"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
