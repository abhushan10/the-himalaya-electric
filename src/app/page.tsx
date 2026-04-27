import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { FAQ } from "@/components/FAQ";
import { ServiceBento } from "@/components/ServiceBento";

import { QuoteModal } from "@/components/QuoteModal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <ServiceBento />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCallBar />
      <QuoteModal />
    </div>
  );
}
