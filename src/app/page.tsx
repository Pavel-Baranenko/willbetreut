import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import About from "@/components/layouts/FrontPage/About";
import Hero from "@/components/layouts/FrontPage/Hero";
import Services from "@/components/layouts/FrontPage/Services";


export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
