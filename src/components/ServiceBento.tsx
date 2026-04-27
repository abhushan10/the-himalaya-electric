"use client";

import { motion } from "framer-motion";
import { Plug, Zap, Lightbulb, Shield, PenToolIcon as Tool, BatteryCharging, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";

const services = [
  {
    title: "Full/Partial Rewiring",
    description: "Expert home rewiring ensuring safety and compliance with current standards.",
    icon: Plug,
    image: "/the-himalaya-electric/images/wiring.png",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Commercial Services",
    description: "Professional electrical solutions for businesses and retail spaces.",
    icon: Shield,
    image: "/the-himalaya-electric/images/commercial.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "EICR Reports",
    description: "Comprehensive Electrical Installation Condition Reports for landlords.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "EV Charging",
    description: "Fast and safe home and business charging point installations.",
    icon: BatteryCharging,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Inspection & Testing",
    description: "Periodic inspections and safety testing for peace of mind.",
    icon: Tool,
    image: "/the-himalaya-electric/images/testing-inspection.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Unit Upgrades",
    description: "Modern fuse board replacements with surge protection.",
    icon: Shield,
    image: "/the-himalaya-electric/images/consumerunit.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Lighting Setup",
    description: "Custom indoor and outdoor lighting solutions to transform your space.",
    icon: Lightbulb,
    image: "/the-himalaya-electric/images/lightning.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function ServiceBento() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground mb-6 leading-[1.1]">
              Expert <span className="text-primary">Electrical</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From commercial installations to residential EICRs, we deliver safe, reliable, and premium electrical services across Margate & Kent.
            </p>
          </div>
          <a
            href="tel:+447728901367"
            className="group inline-flex items-center text-lg font-bold text-primary hover:text-primary/80 transition-colors bg-primary/5 px-6 py-3 rounded-full border border-primary/10"
          >
            Call for professional advice <ArrowUpRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border-2 border-transparent bg-muted/50 transition-all hover:border-primary/30 hover:shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]",
                service.className
              )}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
              </div>

              <div className="relative z-10 flex h-full flex-col p-6 md:p-10">
                <div className="flex-1">
                  <div className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                </div>
                
                <div className="mt-auto bg-background/60 backdrop-blur-xl p-5 md:p-6 rounded-[2rem] border border-white/20 shadow-2xl md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-medium line-clamp-2 text-xs md:text-base opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
