"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";
import { useQuoteModal } from "@/hooks/use-quote-modal";

export function Header() {
  const { onOpen } = useQuoteModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">
            Himalaya<span className="text-secondary">Electric</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <button 
            onClick={() => scrollToId('services')} 
            className="transition-colors hover:text-primary cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToId('testimonials')} 
            className="transition-colors hover:text-primary cursor-pointer"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToId('faq')} 
            className="transition-colors hover:text-primary cursor-pointer"
          >
            FAQ
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="tel:+447728901367" 
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            )}
          >
            <Phone className="mr-2 h-4 w-4" />
            07728 901367
          </a>
          <button 
            onClick={onOpen}
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer"
            )}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
