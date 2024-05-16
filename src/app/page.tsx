import AboutSection from "./sections/about";
import HeroSection from "./sections/hero";
import NavBar from "./sections/navbar";
import RolesSection from "./sections/roles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mx-auto">
      <NavBar></NavBar>
      <div className="h-12 sm:h-24"></div>
      <HeroSection></HeroSection>
      <div className="h-12 sm:h-12"></div>
      <RolesSection></RolesSection>
      <div className="h-12 sm:h-12"></div>
      <AboutSection></AboutSection>
    </main>
  );
}
