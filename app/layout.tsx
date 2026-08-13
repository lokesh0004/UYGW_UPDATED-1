import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeHub — Learn Without Limits",
  description: "India's most advanced online learning platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
