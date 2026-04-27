"use client";

import { useQuoteModal } from "@/hooks/use-quote-modal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

import { X } from "lucide-react";

export function QuoteModal() {
  const { isOpen, onClose } = useQuoteModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent showCloseButton={false} className="sm:max-w-[550px] p-0 overflow-hidden rounded-3xl border-none bg-background shadow-2xl">
        <div className="relative bg-primary px-6 py-8 md:p-10 text-primary-foreground">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white z-50"
          >
            <X className="h-6 w-6" />
          </button>
          <DialogHeader className="pr-8">
            <DialogTitle className="text-2xl md:text-4xl font-extrabold tracking-tight">Request a Quote</DialogTitle>
            <DialogDescription className="text-primary-foreground/80 text-sm md:text-lg mt-2 font-medium">
              We&apos;ll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-4 md:p-8 overflow-y-auto max-h-[70vh]">
          <ContactForm isModal={true} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
