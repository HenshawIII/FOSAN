import type { Metadata } from "next";
import { Libre_Baskerville, Poppins } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food Safety Ambassadors Network (FoSAN)",
  description:
    "Nigerian-based NGO promoting science-based food safety education, awareness, and safer practices across the food value chain — from farm to fork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-fosan-black">
        {children}
      </body>
    </html>
  );
}
