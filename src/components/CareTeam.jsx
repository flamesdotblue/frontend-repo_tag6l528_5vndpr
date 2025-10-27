import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const team = [
  {
    name: 'Dr. Maria Santos',
    role: 'Reproductive Health Specialist',
    region: 'FPOP Manila',
    img: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nurse John Dela Cruz',
    role: 'Community Health Nurse',
    region: 'FPOP Cebu',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Dr. Angela Reyes',
    role: 'OB-GYN',
    region: 'FPOP Davao',
    img: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nurse Paolo Gomez',
    role: 'Youth Program Coordinator',
    region: 'FPOP Baguio',
    img: 'https://images.unsplash.com/photo-1547480053-40e6c704d1ef?q=80&w=1200&auto=format&fit=crop',
  },
];

const CareTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">The People Behind the Care</h2>
          <p className="mt-3 text-[#0B1220]/70">Meet the compassionate professionals dedicated to your well-being.</p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <article key={p.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-[#D7EEF2]">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0B1220]">{p.name}</h3>
              <p className="text-sm text-[#0B1220]/70">{p.role}</p>
              <div className="mt-2 inline-flex items-center gap-1 text-sm text-[#0B1220]/70">
                <MapPin className="h-4 w-4 text-[#2BBCA2]" />
                {p.region}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#2BBCA2] px-4 py-2 text-white font-semibold">
                View Profile
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareTeam;
