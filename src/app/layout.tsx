import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Himalaya Electric Ltd | Expert Electricians in Margate & Kent",
  description: "Safe, reliable, and professional electrical solutions for your home or business in Margate and Kent. NICEIC standard quality. 24/7 Emergency Service.",
  keywords: ["Electrician Margate", "Electrical repairs Kent", "Rewiring", "Consumer Unit Upgrade", "Fault Finding Margate", "EV Charger Installation Kent"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
