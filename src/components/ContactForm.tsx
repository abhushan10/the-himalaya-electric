"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceType: z.string().min(1, "Please select a service type"),
  postcode: z.string().min(4, "Please enter a valid postcode"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm({ isModal = false }: { isModal?: boolean }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // REPLACE 'YOUR_ACCESS_KEY_HERE' with your actual key from https://web3forms.com
    const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: data.name,
          phone: data.phone,
          service: data.serviceType,
          postcode: data.postcode,
          subject: `New Lead from ${data.name}`,
          from_name: "Himalaya Electric Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form submission error:", result);
        alert("Submission failed. Please try calling us directly.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <div className={cn(
      "bg-card rounded-2xl p-4 sm:p-10 border border-border",
      !isModal && "max-w-xl mx-auto shadow-xl"
    )}>
      {!isModal && (
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Request a Free Quote
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      )}

      {isSuccess ? (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-lg text-center border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
          <p>Your quote request has been received. We will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="name" className="text-xs md:text-sm font-bold">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={cn("h-10 md:h-12", errors.name ? "border-destructive" : "")}
            />
            {errors.name && (
              <p className="text-[10px] md:text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="phone" className="text-xs md:text-sm font-bold">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="07700 900000"
              {...register("phone")}
              className={cn("h-10 md:h-12", errors.phone ? "border-destructive" : "")}
            />
            {errors.phone && (
              <p className="text-[10px] md:text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="serviceType" className="text-xs md:text-sm font-bold">Service Required</Label>
            <select
              id="serviceType"
              {...register("serviceType")}
              className={`flex h-10 md:h-12 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.serviceType ? "border-destructive" : "border-input"
              }`}
            >
              <option value="">Select a service...</option>
              <option value="rewiring">Full/Partial Rewiring</option>
              <option value="consumer-unit">Consumer Unit Upgrade</option>
              <option value="fault-finding">Fault Finding</option>
              <option value="lighting">Lighting Design</option>
              <option value="ev-charger">EV Charger Installation</option>
              <option value="other">Other / Not Sure</option>
            </select>
            {errors.serviceType && (
              <p className="text-[10px] md:text-sm text-destructive">{errors.serviceType.message}</p>
            )}
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="postcode" className="text-xs md:text-sm font-bold">Postcode</Label>
            <Input
              id="postcode"
              placeholder="CT9 1AA"
              {...register("postcode")}
              className={cn("h-10 md:h-12", errors.postcode ? "border-destructive" : "")}
            />
            {errors.postcode && (
              <p className="text-[10px] md:text-sm text-destructive">{errors.postcode.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full h-12 md:h-14 text-base md:text-lg bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get My Free Quote"}
          </Button>
        </form>
      )}
    </div>
  );

  if (isModal) return formContent;

  return (
    <section id="quote" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
}
