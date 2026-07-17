import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact Us — Avemaria Computer Solution" }],
  }),
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "General Enquiry",
    message: ""
  });
  
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Avemaria,\n\nI have a query:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Message: ${formData.message}`;
    window.open(`https://wa.me/919100000000?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", details: "+91 91000 00000", action: "tel:+919100000000" },
    { icon: Mail, title: "Email", details: "info@avemariacomputer.com", action: "mailto:info@avemariacomputer.com" },
    { icon: MapPin, title: "Address", details: "123 MG Road, Bengaluru, Karnataka 560001", action: "#map" },
    { icon: Clock, title: "Business Hours", details: "Mon-Sat: 9:00 AM - 7:00 PM", action: null }
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-40 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            We're here to assist you with premium support and technical expertise. Contact us today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-32 relative z-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-elegant border border-gray-100 flex items-start gap-6 hover:-translate-y-1 transition-transform">
                <div className="size-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <info.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-dark text-lg mb-1">{info.title}</h3>
                  {info.action ? (
                    <a href={info.action} className="text-gray-600 hover:text-brand transition-colors text-lg">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-lg">{info.details}</p>
                  )}
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-hero p-8 rounded-3xl text-white shadow-brand-glow mt-8">
              <h3 className="font-display font-bold text-2xl mb-4">Fast Response Support</h3>
              <p className="text-white/80 mb-6">Need immediate assistance? Message us on WhatsApp for a quick reply from our technical team.</p>
              <a 
                href="https://wa.me/919100000000" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#1DA851] transition-colors"
              >
                <MessageCircle className="size-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-elegant border border-gray-100">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Your Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+91 91000 00000" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Service Required</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none"
                >
                  <option>General Enquiry</option>
                  <option>Computer Repair</option>
                  <option>Computer Sales</option>
                  <option>Service & Maintenance</option>
                  <option>CCTV Installation</option>
                  <option>MCB & Electrical Safety</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Tell us about your requirements..." 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all outline-none resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand text-white font-bold text-lg py-4 rounded-xl shadow-brand-glow hover:bg-brand-dark transition-colors"
              >
                Send Request <Send className="size-5" />
              </button>
              
              {sent && (
                <p className="text-center text-emerald-600 font-medium">Opening WhatsApp with your enquiry details...</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[500px] w-full bg-gray-200 relative">
        <iframe
          title="Avemaria location"
          src="https://www.google.com/maps?q=MG+Road+Bengaluru&output=embed"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
      </section>
    </div>
  );
}
