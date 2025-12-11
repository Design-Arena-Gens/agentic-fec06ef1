import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Secret - Hindi सारांश",
  description: "रहस्य (The Secret) पुस्तक का प्रेरक हिंदी सारांश और PDF डाउनलोड"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
