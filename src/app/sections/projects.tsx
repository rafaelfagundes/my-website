import SectionTitle from "@/components/custom/section-title";
import ContentContainer from "@/components/ui/content-container";

function ProjectsSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 w-full">
      <ContentContainer>
        <SectionTitle color="#dc3d2f" textColor="#FFFFFF">
          Projects
        </SectionTitle>
      </ContentContainer>
    </div>
  );
}

export default ProjectsSection;
