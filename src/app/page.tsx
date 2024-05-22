import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import NavBar from "./sections/navbar";
import ProjectsSection from "./sections/projects";
import RolesSection from "./sections/roles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <NavBar></NavBar>
      <div className="h-12 sm:h-20"></div>
      <HeroSection></HeroSection>
      <RolesSection></RolesSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </main>
  );
}
