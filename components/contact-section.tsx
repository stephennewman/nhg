"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/zhen-yao-kRkLorEUSy4-unsplash.jpg"
          alt="Pittsburgh sunset over the river and bridge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 px-6 md:px-12 lg:px-20 py-28 md:py-36 max-w-3xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
          Get in Touch
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-background text-balance">
          {"Let's discuss your"}<br />next venture
        </h2>
        <div className="mt-10">
          <a
            href="mailto:info@newmanholdingsandenterprisegroupllc.com"
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-background/60 hover:text-background transition-colors duration-500"
          >
            <span className="border-b border-background/20 pb-0.5 group-hover:border-background/60 transition-colors duration-500">
              info@newmanholdingsandenterprisegroupllc.com
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
