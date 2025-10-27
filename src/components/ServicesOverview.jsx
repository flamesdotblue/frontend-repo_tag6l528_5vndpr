import React from 'react';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    title: 'Sexual & Reproductive Health',
    desc: 'Comprehensive care including family planning, HIV counseling, and STI management.',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Comprehensive Sexual Education',
    desc: 'Empowering youth through informed, values-based health education.',
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'General Medical Services',
    desc: 'Primary health consultations, diagnostics, and follow-up care.',
    img: 'https://images.unsplash.com/photo-1580281657527-47f249e8f5ec?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Maternal & Child Health',
    desc: 'Support for mothers and children from pregnancy to early childhood.',
    img: 'https://images.unsplash.com/photo-1584515933741-fb1e3a5d8a26?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: "Men's Health Program",
    desc: 'Specialized preventive and wellness services for men.',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Community Outreach Programs',
    desc: 'Bringing healthcare access to rural and underserved communities.',
    img: 'https://images.unsplash.com/photo-1576765975533-1e4b6c70f4e2?q=80&w=1200&auto=format&fit=crop',
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-[#D7EEF2] py-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">Our Services at a Glance</h2>
          <p className="mt-3 text-[#0B1220]/70 text-lg">
            Accessible, quality, and youth-friendly health services for all Filipinos — ensuring compassionate care, education, and support.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img src={c.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0B1220]">{c.title}</h3>
                <p className="mt-2 text-[#0B1220]/70 line-clamp-2">{c.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#2BBCA2] px-4 py-2 text-white font-semibold shadow-sm hover:brightness-110">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
