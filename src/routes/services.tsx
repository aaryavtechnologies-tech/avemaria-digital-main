import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Settings, ShoppingBag, Shield, Zap, Wrench, CheckCircle2 } from "lucide-react";
import imgRepair from "@/assets/gallery-motherboard.jpg";
import imgSales from "@/assets/gallery-accessories.jpg";
import imgMaintenance from "@/assets/gallery-workspace.jpg";
import imgCCTV from "@/assets/cctv-hero-bg.jpg";
import imgMCB from "@/assets/gallery-hardware.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Our Services — Avemaria Computer Solution" }],
  }),
});

function ServicesPage() {
  const services = [
    {
      id: "repair",
      icon: Settings,
      image: imgRepair,
      title: "Computer Repair",
      desc: "Expert computer repair for all issues, restoring your devices quickly and affordably. We diagnose and resolve hardware and software problems with fast turnaround and reliable service.",
      highlights: ["Expert Repairs", "Affordable Pricing", "Quick Turnaround"]
    },
    {
      id: "sales",
      icon: ShoppingBag,
      image: imgSales,
      title: "Computer Sales",
      desc: "Browse a wide range of desktops, laptops, computer accessories, and peripherals from trusted brands. We provide genuine products at competitive prices with expert guidance.",
      highlights: ["Latest Models", "Competitive Prices", "Genuine Products"]
    },
    {
      id: "maintenance",
      icon: Wrench,
      image: imgMaintenance,
      title: "Computer Service & Maintenance",
      desc: "Comprehensive maintenance and support services to keep your systems running efficiently. We provide software optimization, hardware servicing, upgrades, preventive maintenance, and IT support.",
      highlights: ["Reliable Support", "Maintenance Plans", "Customer Satisfaction"]
    },
    {
      id: "cctv",
      icon: Shield,
      image: imgCCTV,
      title: "CCTV Installation & Surveillance",
      desc: "Professional CCTV camera installation for homes, offices, shops, schools, warehouses, and commercial buildings. Ensure maximum security with high-definition surveillance.",
      highlights: ["HD/IP Cameras", "Mobile Monitoring", "Annual Maintenance"]
    },
    {
      id: "mcb",
      icon: Zap,
      image: imgMCB,
      title: "MCB Installation & Electrical Safety",
      desc: "Safe and reliable electrical services including installation, replacement, troubleshooting, and maintenance for residential and commercial properties.",
      highlights: ["Safety Inspections", "Fault Diagnosis", "Electrical Wiring"]
    }
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Comprehensive IT, networking, and safety solutions designed to empower your business and secure your premises.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}
            >
              <div className="w-full lg:w-1/2">
                <div className="size-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  <service.icon className="size-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-brand" />
                      <span className="font-medium text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  search={{ service: service.title }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand text-white font-semibold shadow-lg shadow-brand/20 hover:bg-brand-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Enquire About This Service <ArrowRight className="size-4" />
                </Link>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="aspect-video lg:aspect-square bg-gray-200 rounded-3xl relative overflow-hidden shadow-elegant border border-gray-100 flex items-center justify-center transition-shadow duration-500 group-hover:shadow-elevated">
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                     loading="lazy" 
                   />
                   <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-center px-4">
        <h2 className="text-3xl font-display font-bold text-white mb-6">Need a Custom Solution?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Our team is equipped to handle complex IT infrastructure projects and customized service contracts. Reach out to discuss your specific requirements.
        </p>
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-white text-brand-dark font-bold shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
          Talk to an Expert
        </Link>
      </section>
    </div>
  );
}
