import BackgroundWave from "@/components/BackgroundWave";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import RecentProjects from "@/components/RecentProjects";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundWave />
      <Nav />
      <div className="page">
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <RecentProjects />
        <Founders />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
