import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-4">
              Himalaya<span className="text-secondary">Electric</span>
            </h3>
            <p className="text-primary-foreground/80 max-w-xs">
              Professional, reliable, and fully certified electricians serving Margate and the surrounding areas in Kent.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 text-secondary shrink-0" />
                <a href="tel:+447728901367" className="hover:text-secondary transition-colors">07728 901367</a>
              </li>
              <li className="flex flex-col space-y-1">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 text-secondary shrink-0" />
                  <a href="mailto:info@the-himalaya-electric-ltd.co.uk" className="hover:text-secondary transition-colors text-sm md:text-base">info@the-himalaya-electric-ltd.co.uk</a>
                </div>
                <div className="flex items-start pl-7">
                  <a href="mailto:bhadrarai641@gmail.com" className="hover:text-secondary transition-colors text-sm md:text-base">bhadrarai641@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-secondary shrink-0" />
                <span>Margate, Kent, UK<br/>(and surrounding areas)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-secondary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="#quote" className="hover:text-secondary transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center pb-24 md:pb-8">
          <p className="text-sm text-primary-foreground/60 mb-6">
            &copy; {new Date().getFullYear()} The Himalaya Electric Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-primary-foreground/30 uppercase tracking-[0.2em] font-bold">Built by</span>
            <a 
              href="https://getposverse.com" 
              className="relative inline-block group"
            >
              <span className="relative z-10 px-5 py-2 text-white font-bold text-sm bg-purple-600 rounded-xl inline-block transition-transform group-hover:scale-105 shadow-lg">
                getposverse.com
              </span>
              <span className="absolute inset-0 z-0 bg-purple-600 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity"></span>
            </a>
            <span className="text-[10px] text-primary-foreground/40 mt-1 italic">- Specializing in POS Software -</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
