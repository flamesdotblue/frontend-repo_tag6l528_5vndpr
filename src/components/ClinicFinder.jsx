import React from 'react';
import { MapPin, Phone, Mail, Stethoscope, ChevronRight } from 'lucide-react';

const clinics = [
  {
    name: 'FPOP Manila Central',
    tags: ['Medical Services', 'SRH', 'Education'],
    location: 'Quezon City, NCR',
    phone: '(632) 722 6466',
    email: 'fpop1969@yahoo.com',
  },
  {
    name: 'FPOP Cebu',
    tags: ['SRH', 'Family Planning', 'Education'],
    location: 'Cebu City, Visayas',
    phone: '(6332) 123 4567',
    email: 'cebu@fpop.org',
  },
];

const Filter = ({ label, children }) => (
  <label className="flex-1 min-w-[180px]">
    <span className="block text-sm font-medium text-[#183157] mb-1">{label}</span>
    {children}
  </label>
);

const ClinicFinder = () => {
  return (
    <section className="py-16 bg-white" id="clinics">
      <div className="max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B3D]">Nationwide Network of Care</h2>
            <p className="mt-3 text-[#183157]/80 max-w-2xl">
              Use our interactive map to locate the nearest FPOP clinic in Luzon, Visayas, or Mindanao.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 text-[#2B59C3] font-semibold hover:underline">
            View Full Map
            <ChevronRight className="h-4 w-4" />
          </button>
        </header>

        {/* Filters */}
        <div className="mt-8 rounded-2xl bg-[#F4F8FF] p-4 ring-1 ring-black/5">
          <div className="flex flex-wrap gap-4">
            <Filter label="Region">
              <select className="w-full rounded-lg border border-[#C8D6FF] bg-white px-3 py-2 text-[#0A1B3D] focus:outline-none focus:ring-2 focus:ring-[#2B59C3]">
                <option>Luzon</option>
                <option>Visayas</option>
                <option>Mindanao</option>
              </select>
            </Filter>
            <Filter label="City/Province">
              <input
                type="text"
                placeholder="Search location"
                className="w-full rounded-lg border border-[#C8D6FF] bg-white px-3 py-2 text-[#0A1B3D] placeholder:text-[#183157]/60 focus:outline-none focus:ring-2 focus:ring-[#2B59C3]"
              />
            </Filter>
            <Filter label="Service Type">
              <select className="w-full rounded-lg border border-[#C8D6FF] bg-white px-3 py-2 text-[#0A1B3D] focus:outline-none focus:ring-2 focus:ring-[#2B59C3]">
                <option>All</option>
                <option>SRH</option>
                <option>Education</option>
                <option>Medical Services</option>
              </select>
            </Filter>
          </div>
        </div>

        {/* Clinic cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {clinics.map((c) => (
            <article key={c.name} className="rounded-2xl border border-[#E3EBFF] bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#0A1B3D]">{c.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full bg-[#EAF1FF] px-3 py-1 text-xs font-medium text-[#2B59C3]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block">
                  <Stethoscope className="h-8 w-8 text-[#2B59C3]" />
                </div>
              </div>

              <div className="mt-4 space-y-2 text-[#183157]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#2B59C3]" />
                  <span>{c.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#2B59C3]" />
                  <a href={`tel:${c.phone}`} className="hover:underline">{c.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#2B59C3]" />
                  <a href={`mailto:${c.email}`} className="hover:underline">{c.email}</a>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center rounded-full bg-[#2B59C3] px-4 py-2 text-white font-semibold shadow-sm hover:brightness-110"
                >
                  Book Appointment
                </a>
                <button className="inline-flex items-center gap-1 rounded-full border border-[#C8D6FF] px-4 py-2 text-[#2B59C3] font-semibold hover:bg-[#F4F8FF]">
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicFinder;
