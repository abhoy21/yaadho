import Features from "./features";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import OtherIntegrations from "./other-Integrations";
import Pricing from "./pricing";
import Testimonials from "./testimonials";

export default function LandingPage() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <OtherIntegrations />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
