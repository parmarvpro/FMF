import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Partnership from '@/components/Partnership';
import WhyUs from '@/components/WhyUs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Partnership />
      <WhyUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
