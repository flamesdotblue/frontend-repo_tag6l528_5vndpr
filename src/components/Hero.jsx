import React from 'react';
import Spline from '@splinetool/react-spline';
import { Stethoscope, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#0B1220] text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft top/bottom gradient vignettes so text stays readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1220]/80 via-transparent to-[#0B1220]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/80">
          <ol className="flex items-center gap-2">
            <li>
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li className="opacity-60">/</li>
            <li className="font-medium text-white">Our Services</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Health Services Near You
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85">
            Find out about the services we offer to support your sexual and reproductive health — designed for every Filipino, with compassion and care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-[#2B59C3] px-6 py-3 font-semibold shadow-lg shadow-[#2B59C3]/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B1220] focus:ring-[#2B59C3]"
            >
              <Stethoscope className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href="#clinics"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B1220] focus:ring-white/40"
            >
              <MapPin className="h-5 w-5" />
              Find a Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
