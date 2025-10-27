import React from 'react';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import ClinicFinder from './components/ClinicFinder';
import CareTeam from './components/CareTeam';
import { Quote, ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-inter bg-white text-[#0B1220]">
      <Hero />
      <ServicesOverview />
      <ClinicFinder />
      <CareTeam />

      {/* Community Stories */}
      <section className="bg-[#D7EEF2] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <header className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Real Stories. Real Change.</h2>
            <p className="mt-3 text-[#0B1220]/70">Discover how FPOP services have changed lives and empowered communities across the Philippines.</p>
          </header>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <Quote className="h-6 w-6 text-[#2BBCA2]" />
                <p className="mt-3 text-[#0B1220]/80">
                  “Thanks to FPOP, I received respectful counseling and found the right care for me. The team made me feel safe and informed.”
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">Community Member</div>
                    <div className="text-sm text-[#0B1220]/60">Philippines</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-[#2BBCA2] px-5 py-2.5 text-white font-semibold">
              Read Stories
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#A6DAD9] px-5 py-2.5 text-[#2BBCA2] font-semibold hover:bg-white">
              Submit Your Story
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1687563100843-facb420d3b48?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMGNvbW11bml0eXxlbnwwfDB8fHwxNzYxNTU3MDQwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Filipino community" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Empowering Health. Inspiring Change.</h2>
          <p className="mt-3 max-w-3xl text-white/90">Join us in promoting sexual and reproductive health for every Filipino. Your support helps bring care and education to more communities.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="rounded-full bg-[#2BBCA2] px-6 py-3 font-semibold shadow-lg shadow-black/20 hover:brightness-110">Donate Now</a>
            <a href="#" className="rounded-full bg-white/10 px-6 py-3 font-semibold ring-1 ring-white/30 hover:bg-white/20">Volunteer With Us</a>
          </div>
        </div>
      </section>

      {/* Quick Access Band */}
      <div className="bg-[#ECF9F7]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold">Quick Links:</div>
          <nav className="flex flex-wrap gap-3 text-sm">
            {['Clinics','Resources','Careers','FAQs','Contact'].map((item) => (
              <a key={item} href="#" className="rounded-full bg-white px-3 py-1.5 text-[#2BBCA2] font-medium ring-1 ring-[#A6DAD9] hover:brightness-110">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E6F4F3]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-extrabold text-[#2BBCA2]">FPOP</div>
            <p className="mt-2 text-sm text-[#0B1220]/70">Compassionate, quality sexual and reproductive health services for every Filipino.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Getting Care</div>
            <ul className="space-y-2 text-sm text-[#0B1220]/80">
              <li><a href="#" className="hover:underline">Find a Clinic</a></li>
              <li><a href="#" className="hover:underline">Book an Appointment</a></li>
              <li><a href="#" className="hover:underline">Our Services</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">About Us</div>
            <ul className="space-y-2 text-sm text-[#0B1220]/80">
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">Care Team</a></li>
              <li><a href="#" className="hover:underline">Community Stories</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-[#0B1220]/80">
              <li>FPOP National Office, Quezon City</li>
              <li>Phone: (632) 722 6466</li>
              <li>Email: info@fpop.org</li>
              <li className="pt-2 flex items-center gap-3">
                <a aria-label="Facebook" href="#" className="p-2 rounded-full ring-1 ring-[#A6DAD9] text-[#0B1220]/80 hover:text-[#2BBCA2]"><Facebook className="h-4 w-4" /></a>
                <a aria-label="Instagram" href="#" className="p-2 rounded-full ring-1 ring-[#A6DAD9] text-[#0B1220]/80 hover:text-[#2BBCA2]"><Instagram className="h-4 w-4" /></a>
                <a aria-label="YouTube" href="#" className="p-2 rounded-full ring-1 ring-[#A6DAD9] text-[#0B1220]/80 hover:text-[#2BBCA2]"><Youtube className="h-4 w-4" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E6F4F3]">
          <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-[#0B1220]/60">
            © {new Date().getFullYear()} Family Planning Organization of the Philippines. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
