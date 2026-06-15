import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export const CTABanner = () => {
  return (
    <section
      id="cta "
      data-testid="cta-section "
      className="relative section-pad "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-16 "
          style={{
            background: "#020024",
            background:
              "linear-gradient(253deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 255, 1) 0%, rgba(0, 212, 255, 1) 24%)",
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_75%)] " />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full" />

          <div className="relative grid lg:grid-cols-12 gap-8 items-center ">
            <div className="lg:col-span-8 ">
              <p className="text-[14px] font-mono-d uppercase tracking-[0.25em] text-white  ">
                Get Started
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl tracking-tighter font-semibold text-black ">
                {/* Modernize Your Data Infrastructure with Segmetriq. */}
                Work Your Data
              </h2>
            </div>
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end ">
              <a
                href="# "
                data-testid="cta-schedule-demo "
                className="btn-primary w-full justify-center "
              >
                Start For Free
                <ArrowRight className="w-4 h-4 " />
              </a>
              <a
                href="# "
                data-testid="cta-contact-sales "
                className="btn-outline w-full justify-center "
              >
                <PhoneCall className="w-4 h-4 " />
                Schedule Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
