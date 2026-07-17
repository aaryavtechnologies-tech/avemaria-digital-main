import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Target, Compass, Heart, Settings, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-technician.jpg";
import logoAsset from "@/assets/avemaria-logo.png.asset.json";
import galleryHardware from "@/assets/gallery-hardware.jpg";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Avemaria Computer Solution — Premium IT Services" },
      {
        name: "description",
        content: "Expert computer repair, sales, CCTV, and electrical safety solutions by certified professionals.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-dark pt-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-brand/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-light/10 blur-[100px] rounded-full" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-brand-light font-medium text-sm mb-6 border border-white/20 backdrop-blur-sm">
              Premium IT Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight drop-shadow-xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Avemaria
              </span>
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand drop-shadow-sm">
                Computer Solution
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
              We provide expert computer repair, enterprise-grade sales, advanced CCTV installations, and comprehensive IT maintenance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-3.5 rounded-full bg-brand text-white font-semibold shadow-brand-glow hover:bg-brand-dark transition-all hover:-translate-y-1">
                Get a Free Consultation
              </Link>
              <Link to="/services" className="px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all border border-white/10">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-display font-bold text-white">Expert</p>
                <p className="text-sm text-gray-400 mt-1">Technicians</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">Fast</p>
                <p className="text-sm text-gray-400 mt-1">Turnaround</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">Genuine</p>
                <p className="text-sm text-gray-400 mt-1">Parts & Service</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-elevated border border-white/10 group">
            <img src={heroImage} alt="Expert Technician" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-gray-50 relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">Core Expertise</h2>
            <p className="text-gray-600 text-lg">Delivering high-end solutions tailored to your unique requirements.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Computer Repair", icon: Settings, desc: "Expert diagnostics and fast turnaround for all hardware and software issues." },
              { title: "CCTV Installation", icon: Shield, desc: "Advanced surveillance systems ensuring round-the-clock security." },
              { title: "MCB & Safety", icon: Zap, desc: "Reliable electrical safety solutions and installations for peace of mind." }
            ].map((s, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white shadow-elegant hover:shadow-elevated transition-all border border-gray-100 hover:-translate-y-2">
                <div className="size-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                  <s.icon className="size-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-dark mb-3">{s.title}</h3>
                <p className="text-gray-600 mb-6">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-dark transition-colors">
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-brand-glow">
            <img src={galleryWorkspace} alt="Our Workspace" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Choose Avemaria Computer Solution?</h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              We provide trusted computer repair, sales, CCTV installation, MCB electrical solutions, and maintenance services with experienced technicians, genuine products, quick turnaround, and excellent customer support.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Expert Repair", "Great Value", 
                "Dependable Service", "Customer Focus", 
                "Fast Service", "All-in-One Solutions"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="size-6 text-brand-light flex-shrink-0" />
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 font-medium">
                Read our story <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, white 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
        <div className="mx-auto max-w-4xl px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Ready to upgrade your tech infrastructure?
          </h2>
          <p className="text-brand-light text-xl mb-10 max-w-2xl mx-auto">
            Get in touch with our experts today for a free consultation and premium support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-white text-brand-dark font-bold shadow-xl hover:scale-105 transition-transform text-lg">
              Contact Us Now
            </Link>
            <a href="tel:+919100000000" className="px-8 py-4 rounded-full bg-brand-dark text-white font-bold shadow-xl hover:bg-gray-900 transition-colors text-lg flex items-center gap-2">
              <Phone className="size-5" /> Call +91 91000 00000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
