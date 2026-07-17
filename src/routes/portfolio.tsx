import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import galleryHardware from "@/assets/gallery-hardware.jpg";
import galleryMotherboard from "@/assets/gallery-motherboard.jpg";
import galleryNetworking from "@/assets/gallery-networking.jpg";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";
import galleryAccessories from "@/assets/gallery-accessories.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [{ title: "Our Portfolio — Avemaria Computer Solution" }],
  }),
});

function PortfolioPage() {
  const projects = [
    { title: "Corporate Network Setup", category: "Networking", img: galleryNetworking },
    { title: "Advanced Motherboard Repair", category: "Hardware Repair", img: galleryMotherboard },
    { title: "IT Infrastructure Upgrade", category: "Maintenance", img: galleryWorkspace },
    { title: "Custom PC Build Assembly", category: "Sales & Assembly", img: galleryHardware },
    { title: "Enterprise Hardware Provisioning", category: "Sales", img: galleryAccessories },
    { title: "Data Recovery Project", category: "Software Support", img: galleryHardware },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-up">
            Our Work
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            A selection of our most impactful projects, showcasing our technical expertise and commitment to quality.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {/* Category Filters (UI Only for now) */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["All", "Hardware Repair", "Networking", "Sales & Assembly", "Maintenance"].map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0 ? "bg-brand text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="relative group rounded-3xl overflow-hidden break-inside-avoid shadow-elegant border border-gray-100"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-brand-light font-medium text-sm mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-display font-bold text-white mb-4">{project.title}</h3>
                    <div className="flex gap-3 mt-4">
                      <Link to="/contact" search={{ service: project.title }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand text-white font-medium hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg text-sm">
                        Enquire Now <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-elegant border border-gray-100 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider rounded-full mb-6">Featured Case Study</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                Complete IT Infrastructure Overhaul
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We successfully upgraded the entire IT infrastructure of a local firm, establishing a secure, scalable network and performing comprehensive hardware maintenance to ensure long-term reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-xl font-display font-bold text-brand mb-1">Secure Network</div>
                  <div className="text-sm text-gray-500">Enterprise-grade firewalls</div>
                </div>
                <div>
                  <div className="text-xl font-display font-bold text-brand mb-1">Scalable Setup</div>
                  <div className="text-sm text-gray-500">Future-proof architecture</div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-auto h-full rounded-2xl overflow-hidden shadow-sm">
              <img src={galleryNetworking} alt="Case Study" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
