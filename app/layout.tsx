import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DIMARDI | Pre-Owned Watches", template: "%s | DIMARDI" },
  description: "Pre-owned and carefully selected watches. Discover the DIMARDI collection.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased"><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content" tabIndex={-1}>{children}</main><Footer/></body></html>;
}
