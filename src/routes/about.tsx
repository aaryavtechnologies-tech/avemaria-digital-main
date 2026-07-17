import { createFileRoute } from "@tanstack/react-router";
import { Compass, Target, Heart, CheckCircle2 } from "lucide-react";
import galleryNetworking from "@/assets/gallery-networking.jpg";
import heroTechnician from "@/assets/hero-technician.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About Us — Avemaria Computer Solution" }],
  }),
});

function AboutPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
            About Avemaria
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            A dedicated team delivering premium computer repair, sales, and IT infrastructure solutions you can rely on.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              Our Journey of <br/><span className="text-brand">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Avemaria Computer Solution was built with a simple mission: to provide honest, reliable, and high-quality computer repair services. Today, we have evolved into a comprehensive IT solutions provider, offering everything from hardware sales to advanced CCTV and electrical safety installations.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our growth is driven by our unwavering commitment to customer satisfaction, technical expertise, and the use of genuine parts. We treat every device and project with care, ensuring minimal downtime and maximum efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-3xl font-display font-bold text-brand-dark">Expert</p>
                <p className="text-gray-500 font-medium mt-2">Technicians</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-brand-dark">100%</p>
                <p className="text-gray-500 font-medium mt-2">Genuine Products</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gray-100">
            <img src={galleryNetworking} alt="Networking Setup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* MVV Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">Our Core Philosophy</h2>
            <p className="text-gray-600 text-lg">The guiding principles that shape our work and our relationship with clients.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Our Vision", icon: Compass, desc: "To be a trusted and preferred destination for comprehensive computer repair, sales, and advanced IT infrastructure services that our clients can always rely on." },
              { title: "Our Mission", icon: Target, desc: "To deliver expert, transparent, and swift technology solutions that empower businesses and individuals to perform at their best." },
              { title: "Our Values", icon: Heart, desc: "Integrity, excellence, continuous learning, and an unwavering focus on complete customer satisfaction." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-elegant transition-shadow text-center">
                <div className="mx-auto size-16 rounded-2xl bg-brand-dark text-white flex items-center justify-center mb-6">
                  <item.icon className="size-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-elegant">
            <img src={heroTechnician} alt="Technician at work" className="w-full h-full object-cover" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              Why Clients Trust Us
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We go beyond simple repairs. We build lasting relationships based on trust, quality, and exceptional service delivery.
            </p>
            
            <ul className="space-y-4">
              {[
                "Certified & Experienced Technicians",
                "Transparent Pricing with No Hidden Costs",
                "Quick Diagnostics & Fast Turnaround",
                "Warranty on Parts and Labor",
                "Premium Corporate Support & Maintenance",
                "End-to-End Solutions under One Roof"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-brand shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
