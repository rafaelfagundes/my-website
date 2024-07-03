import SectionTitle from "@/components/custom/section-title";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import ContentContainer from "@/components/ui/content-container";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";

function ProjectsSection() {
  return (
    <AuroraBackground className="pb-2 sm:py-20 w-screen">
      <div className="flex flex-col  w-full items-center justify-center">
        <ContentContainer>
          <SectionTitle color="#dc3d2f" textColor="#FFFFFF">
            Projects
          </SectionTitle>
          <div className="h-8"></div>
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-8 rounded-xl bg-black">
              <Project
                description="A tool that quickly summarizes your YouTube videos"
                image="/img/projects/summarizer.jpg"
                title="Summarizer"
                url="https//www.summarizer.tv"
              ></Project>
            </div>
            <div className="grid grid-cols-1 gap-4 col-span-4 grid-rows-2">
              <div className="bg-black overflow-hidden rounded-xl">
                <Project
                  description="A start page with a minimalistic design"
                  image="/img/projects/start-page.jpg"
                  title="Start Page"
                  url="https://github.com/rafaelfagundes/start-page-3"
                ></Project>
              </div>
              <div className="bg-black overflow-hidden rounded-xl">
                <Project
                  description="A simple app that runs in your tray bar to store your favorite links"
                  image="/img/projects/summarizer.jpg"
                  title="Tray Links"
                  url="https://github.com/rafaelfagundes/TrayLinks"
                ></Project>
              </div>
            </div>
          </div>
          <div className="h-10"></div>
          <Button variant="outline">
            <span className="flex flex-row items-center space-x-2">
              <GithubLogo size={24} weight="duotone" />
              <span>View More Projects on GitHub</span>
            </span>
          </Button>
        </ContentContainer>
      </div>
    </AuroraBackground>
  );
}

export default ProjectsSection;

// 0.7532467532

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

function Project(props: ProjectProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      <img
        src={props.image}
        alt={props.title}
        className="object-cover w-full h-full"
      />
      <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-90 absolute bottom-0 left-0 right-0"></div>
      <div className="absolute bottom-0 left-0 right-0 text-white p-4">
        <h3 className="text-lg font-bold">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
