export default function CTABanner() {
  const handleBookConsultation = () => {
    const subject = encodeURIComponent("Discovery Call Request — Book Consultation");
    const body = encodeURIComponent(`Hi Ayomide,

I'd like to book a free 30-minute discovery call to discuss my project.

My Name:
My Company:
Project Type:
Best Time to Reach Me:

Looking forward to speaking with you.

---
Sent from Sastech Consults website CTA`);

    window.location.href = `mailto:ayomidesholarin13@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-gradient-to-r from-[#0ea5e9] to-[#2dd4bf] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl text-white mb-4 font-bold"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Ready to build something that works?
        </h2>
        <p className="text-white/85 text-lg mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
          Book your free 30-minute discovery call. No pressure. No commitment.
        </p>
        <button
          onClick={handleBookConsultation}
          className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#0ea5e9] font-semibold text-base hover:bg-slate-50 transition-colors duration-150 cursor-pointer shadow-lg"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
}
