"use client";

import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";
import { useQuoteModal } from "@/hooks/use-quote-modal";

export function Hero() {
  const { onOpen } = useQuoteModal();

  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-24 lg:pt-32 pb-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-background to-background dark:from-sky-900/20 dark:via-background dark:to-background"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            Expert <span className="relative inline-block">
              <span className="relative z-10 px-3 py-1 text-white">Electricians</span>
              <span className="absolute inset-0 z-0 bg-secondary rounded-2xl rotate-1"></span>
            </span> in <span className="text-primary">Margate & Kent</span> <br className="hidden md:block" />
            Available Now.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Safe, reliable, and professional electrical solutions for your home or business. NICEIC standard quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-sm flex-col space-y-4 sm:max-w-md sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <a 
            href="tel:+447728901367" 
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 shadow-xl"
            )}
          >
            <Phone className="mr-2 h-5 w-5" />
            07728 901367
          </a>
          <button 
            onClick={onOpen}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto text-lg h-14 px-8 border-2 cursor-pointer"
            )}
          >
            Request a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
