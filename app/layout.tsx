import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/_components/layouts/Header";
import { Footer } from "@/app/_components/layouts/Footer";
import { HeaderNav } from "@/app/_components/navs/HeaderNav";
import { FooterNav } from "@/app/_components/navs/FooterNav";
import { BrandBtn } from "@/app/_components/buttons/BrandBtn";
import { SocialLinks } from "@/app/_components/navs/SocialLinks";

const headerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact", classNames: "button-links" },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const socialIconsLinks = [
  { href: "/facebook", src: "/social/icon-facebook.svg", alt: "Facebook", width: 100, height: 100 },
  { href: "/instagram", src: "/social/icon-instagram.svg", alt: "Instagram", width: 100, height: 100 },
  { href: "/twitter", src: "/social/icon-twitter.svg", alt: "Twitter", width: 100, height: 100 },
];

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const documentTitle = "Frontend Mentor | Sunnyside agency landing page";

export const metadata: Metadata = {
  applicationName: "sunnyside",
  title: {
    default: documentTitle,
    template: "%s | Sunnyside agency landing page",
  },
  description:
    "Sunnyside creative agency — full-service branding, design, and photography.",
  appleWebApp: {
    title: "sunnyside",
    capable: true,
  },
  openGraph: {
    title: documentTitle,
    siteName: "sunnyside",
  },
  twitter: {
    title: documentTitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header>
          <div className="min-w-[124px]">
            <BrandBtn src="/logo.svg" alt="Sunnyside" href="/" width={124} height={24} />
          </div>
          <HeaderNav links={headerLinks} />
        </Header>
        {children}
        <Footer>
          <div>
            <BrandBtn src="/logo-green.svg" alt="Sunnyside" href="/" width={124} height={24} />
          </div>
          <FooterNav links={footerLinks} />
          <div>
            <SocialLinks socialIconsLinks={socialIconsLinks} />
          </div>
        </Footer>
      </body>
    </html>
  );
}
