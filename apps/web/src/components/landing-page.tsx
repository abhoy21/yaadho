import Features from "./features";
import Footer from "./footer";
import Hero from "./hero";
import Integrations from "./integrations";
import Navbar from "./navbar";
import Pricing from "./pricing";
import Testimonials from "./testimonials";

export default function LandingPage(): React.JSX.Element {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
