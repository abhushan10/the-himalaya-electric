"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, MapPin, Star } from "lucide-react";

const trustSignals = [
  { icon: Clock, text: "24/7 Emergency Service" },
  { icon: ShieldCheck, text: "Fully Insured" },
  { icon: MapPin, text: "Local Experts" },
  { icon: Star, text: "5-Star Rated" },
];

export function TrustBar() {
  return (
    <div className="border-y bg-muted/50 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center justify-center space-y-2 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <signal.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground md:text-base">
                {signal.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
