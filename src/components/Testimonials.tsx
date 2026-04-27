"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Margate",
    text: "Fantastic service! They arrived within the hour for an emergency fault finding and fixed the issue quickly. Highly recommend their professional approach.",
  },
  {
    name: "David Smith",
    location: "Broadstairs",
    text: "Upgraded our old consumer unit. The team was punctual, tidy, and explained everything clearly. Very reasonable price for such high-quality work.",
  },
  {
    name: "Emma Wood",
    location: "Ramsgate",
    text: "We needed our kitchen rewired for a new extension. The Himalaya Electric team was brilliant from start to finish. We will definitely use them again.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Trusted by Our Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our customers in Kent have to say about our services.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border shadow-sm relative"
            >
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
