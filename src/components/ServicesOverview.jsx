import React from 'react';
import { Stethoscope, GraduationCap, Hospital, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Sexual & Reproductive Health',
    desc:
      'Comprehensive, rights-based care — from family planning to HIV counseling and STI management.',
    bullets: [
      'HIV Testing & Counseling',
      'Family Planning & Contraceptives',
      'STI Management',
      'Safe Male Circumcision',
    ],
    cta: 'View Service Details',
  },
  {
    icon: GraduationCap,
    title: 'Comprehensive Sexual Education',
    desc:
      'Empowering youth through education and outreach for informed, responsible choices.',
    bullets: [
      'Workshops for Youth',
      'School-Based Education',
      'Community Outreach Programs',
    ],
    cta: 'View Service Details',
  },
  {
    icon: Hospital,
    title: 'General Medical Services',
    desc: 'Primary care and diagnostics for holistic well-being.',
    bullets: ['Lab Tests (FBC, Microscopy)', 'Antenatal & Postnatal Care', 'Immunizations'],
    cta: 'View Service Details',
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-[#F4F8FF] py-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B3D]">Our Services at a Glance</h2>
          <p className="mt-3 text-[#183157]/80 text-lg">
            Accessible, quality, and youth-friendly sexual and reproductive health services for all Filipinos, especially underserved communities.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-content-center rounded-xl bg-[#E7EEFF] text-[#2B59C3]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A1B3D]">{s.title}</h3>
              </div>
              <p className="mt-3 text-[#183157]/80">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-[#183157]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2B59C3]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-5 inline-flex items-center gap-1 text-[#2B59C3] font-semibold hover:underline">
                {s.cta}
                <ChevronRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
