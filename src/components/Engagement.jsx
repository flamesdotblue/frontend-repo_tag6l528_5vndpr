import React, { useState } from 'react';
import { Star, MessageSquare, Calendar, Phone } from 'lucide-react';

const Input = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-[#183157] mb-1">{label}</span>
    <input
      {...props}
      className="w-full rounded-lg border border-[#C8D6FF] bg-white px-3 py-2 text-[#0A1B3D] placeholder:text-[#183157]/60 focus:outline-none focus:ring-2 focus:ring-[#2B59C3]"
    />
  </label>
);

const Select = ({ label, children, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-[#183157] mb-1">{label}</span>
    <select
      {...props}
      className="w-full rounded-lg border border-[#C8D6FF] bg-white px-3 py-2 text-[#0A1B3D] focus:outline-none focus:ring-2 focus:ring-[#2B59C3]"
    >
      {children}
    </select>
  </label>
);

const Textarea = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-sm font-medium text-[#183157] mb-1">{label}</span>
    <textarea
      {...props}
      className="w-full rounded-lg border border-[#C8D6FF] bg-white px-3 py-2 text-[#0A1B3D] placeholder:text-[#183157]/60 focus:outline-none focus:ring-2 focus:ring-[#2B59C3]"
    />
  </label>
);

const Engagement = () => {
  const [rating, setRating] = useState(5);

  const submitReview = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  const submitBooking = (e) => {
    e.preventDefault();
    alert('Your appointment request has been submitted. Our team will contact you soon.');
  };

  return (
    <section className="bg-[#F4F8FF]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10">
        {/* Feedback */}
        <div id="feedback">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B3D]">We Value Your Feedback <span className="align-middle">💖</span></h2>
          <p className="mt-2 text-[#183157]/80 max-w-2xl">
            Your feedback helps us improve the quality of care for every Filipino. Share your experience with FPOP services.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 flex items-center justify-between">
              <div>
                <div className="text-sm text-[#183157]/70">Average Rating</div>
                <div className="mt-1 text-3xl font-bold text-[#0A1B3D]">4.8 / 5</div>
              </div>
              <Star className="h-10 w-10 text-[#2B59C3]" />
            </div>

            <form onSubmit={submitReview} className="md:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Name" type="text" placeholder="Your name" required />
                <Input label="Email" type="email" placeholder="you@example.com" required />
                <Select label="Rating" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                  {[5,4,3,2,1].map((r) => (
                    <option key={r} value={r}>{r} - {r === 5 ? 'Excellent' : r === 4 ? 'Good' : r === 3 ? 'Okay' : r === 2 ? 'Poor' : 'Bad'}</option>
                  ))}
                </Select>
                <Input label="Service Used" type="text" placeholder="e.g., Family Planning" />
                <div className="md:col-span-2">
                  <Textarea label="Write a Review" rows={4} placeholder="Share your experience" required />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#2B59C3] px-5 py-2.5 text-white font-semibold shadow-sm hover:brightness-110">
                  <MessageSquare className="h-5 w-5" />
                  Share Feedback
                </button>
                <a href="#" className="text-[#2B59C3] font-semibold hover:underline">See What Others Say</a>
              </div>
            </form>
          </div>
        </div>

        {/* Booking */}
        <div id="book">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1B3D]">Plan Your Visit with Ease</h2>
          <p className="mt-2 text-[#183157]/80 max-w-2xl">
            Our friendly staff are ready to assist you with consultations, counseling, and treatments.
          </p>

          <form onSubmit={submitBooking} className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Name" type="text" placeholder="Your full name" required />
              <Input label="Email" type="email" placeholder="you@example.com" required />
              <Input label="Contact Number" type="tel" placeholder="09xx xxx xxxx" required />
              <Select label="Region / Clinic" required>
                <option value="">Select a region</option>
                <option value="NCR">NCR</option>
                <option value="Luzon">Luzon</option>
                <option value="Visayas">Visayas</option>
                <option value="Mindanao">Mindanao</option>
              </Select>
              <Select label="Service Type" required>
                <option value="">Select service</option>
                <option>SRH - HIV Testing & Counseling</option>
                <option>SRH - Family Planning & Contraceptives</option>
                <option>SRH - STI Management</option>
                <option>SRH - Safe Male Circumcision</option>
                <option>Education - Workshops for Youth</option>
                <option>Medical - Lab Tests</option>
                <option>Medical - Antenatal & Postnatal</option>
                <option>Medical - Immunizations</option>
              </Select>
              <Input label="Preferred Date" type="date" required />
              <div className="md:col-span-2">
                <Textarea label="Notes" rows={3} placeholder="Anything we should prepare for your visit?" />
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#2B59C3] px-6 py-2.5 text-white font-semibold shadow-sm hover:brightness-110">
                <Calendar className="h-5 w-5" />
                Submit Request
              </button>
              <a href="tel:+63-2-722-6466" className="inline-flex items-center gap-2 rounded-full border border-[#C8D6FF] px-5 py-2.5 text-[#2B59C3] font-semibold hover:bg-[#F4F8FF]">
                <Phone className="h-5 w-5" />
                Call for Help
              </a>
            </div>
          </form>
        </div>

        {/* Big CTA */}
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A1B3D]">Empowering Health. Inspiring Change.</h3>
          <p className="mt-2 text-[#183157]/80 max-w-3xl mx-auto">
            Join us in promoting better sexual and reproductive health for every Filipino. Your support helps reach more communities with life-changing care.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="rounded-full bg-[#2B59C3] px-6 py-2.5 text-white font-semibold shadow hover:brightness-110">Donate Now</a>
            <a href="#" className="rounded-full border border-[#C8D6FF] px-6 py-2.5 text-[#2B59C3] font-semibold hover:bg-[#F4F8FF]">Volunteer with Us</a>
          </div>
        </div>
      </div>

      {/* Quick Access band */}
      <div className="mt-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold text-[#0A1B3D]">Quick Links:</div>
          <nav className="flex flex-wrap gap-3 text-sm">
            {['Clinics','Resources','Careers','FAQs','Contact'].map((item) => (
              <a key={item} href="#" className="rounded-full bg-[#F4F8FF] px-3 py-1.5 text-[#2B59C3] font-medium hover:brightness-110">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
