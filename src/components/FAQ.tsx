"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you provide electrical safety certificates (EICR)?",
    answer: "Yes, we are fully qualified to provide Electrical Installation Condition Reports (EICR). These are essential for landlords (required every 5 years or at change of tenancy) and highly recommended for homeowners to ensure their property's safety."
  },
  {
    question: "How can I get a quote for electrical work?",
    answer: "You can get a free, no-obligation quote by calling us directly at 07728 901367 or by filling out our online request form. For larger projects like full rewires, we typically visit your property to provide an accurate fixed-price quote."
  },
  {
    question: "What areas in Kent do you cover?",
    answer: "We are based in Margate and primarily serve all of Thanet (Broadstairs, Ramsgate, Westgate) as well as Canterbury, Herne Bay, Whitstable, and the surrounding Kent areas."
  },
  {
    question: "Are you NICEIC registered and insured?",
    answer: "Yes, we are fully insured and our work meets the highest industry standards. We pride ourselves on being part of a competent person scheme, ensuring all installations comply with BS 7671 (IEE Wiring Regulations)."
  },
  {
    question: "How long does a typical house rewire take?",
    answer: "A standard 3-bedroom house rewire usually takes between 5 to 10 working days, depending on whether the property is occupied or empty. We work efficiently to minimize disruption to your home."
  },
  {
    question: "What should I do in an electrical emergency?",
    answer: "If you see smoke, sparks, or smell burning, turn off your main power at the consumer unit (fuse box) immediately and call us at 07728 901367. We offer 24/7 emergency response in Margate and surrounding areas."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-primary/10 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-all hover:text-primary"
      >
        <span className="text-lg font-bold md:text-xl">{question}</span>
        <span className="ml-4 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-6 w-6 text-primary" />
          ) : (
            <Plus className="h-6 w-6 text-muted-foreground" />
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed md:text-lg">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4 uppercase tracking-widest">Information</h2>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              At The Himalaya Electric Ltd, we pride ourselves on our clear communication and commitment to excellence in every electrical service we provide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Explore common questions and important electrical safety information to help you make informed decisions about your home or business. We believe in transparency and empowering our customers with knowledge.
            </p>
            
            <div className="p-8 rounded-[2.5rem] bg-primary text-primary-foreground shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="mb-8 opacity-90">If you can't find what you're looking for, please don't hesitate to contact us directly for expert advice.</p>
              <a 
                href="tel:+447728901367" 
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-opacity-90 transition-all"
              >
                Call 07728 901367
              </a>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground mb-6">Frequently asked questions</h2>
              <p className="text-lg text-muted-foreground">
                Below, you'll find answers to the most common questions we receive, from pricing and timelines to electrical safety and best practices.
              </p>
            </div>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
