import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata = {
  title: "View Counter",
  description:
    "A simple Github profile view counter made by Firebase and Next.js.",
};
