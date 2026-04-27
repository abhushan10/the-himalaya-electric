import { Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:hidden">
      <div className="flex gap-4">
        <a 
          href="tel:+447728901367" 
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "flex-1 bg-primary text-primary-foreground text-lg h-14"
          )}
        >
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </a>
      </div>
    </div>
  );
}
