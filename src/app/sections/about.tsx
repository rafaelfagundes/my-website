import Pill from "@/components/custom/pill";
import SectionTitle from "@/components/custom/section-title";
import ContentContainer from "@/components/ui/content-container";
import config from "@/lib/config";

function AboutSection() {
  const colors = {
    frontend: { background: "#FFBE0B", foreground: "#000000" },
    backend: { background: "#6874E8", foreground: "#FFFFFF" },
    databases: { background: "#FF006E", foreground: "#FFFFFF" },
    devopsAndOthers: { background: "#00EE6E", foreground: "#000000" },
  };

  // const colors = {
  //   frontend: { background: "#FFC75F", foreground: "#404040" }, // softer yellow and dark gray
  //   backend: { background: "#7298DA", foreground: "#202020" }, // softer blue and dark gray
  //   databases: { background: "#FF6F91", foreground: "#F0F0F0" }, // softer pink and light gray
  //   devopsAndOthers: { background: "#4BC0C8", foreground: "#202020" }, // softer green and dark gray
  // };

  return (
    <ContentContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-40">
        <div className="flex flex-col w-full">
          <SectionTitle color="#6874E8">About Me</SectionTitle>
          <div className="h-8"></div>
          {config.about.aboutMe.paragraphs.map((paragraph, index) => (
            <p className="mb-6" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <SectionTitle color="#FFBE0B">My Skills</SectionTitle>
          <div className="h-8"></div>
          <div className="flex flex-row items-center gap-2 mb-8 flex-wrap">
            {config.about.mySkills.frontend.map((skill, index) => (
              <Pill
                key={index}
                color={colors.frontend.background}
                textColor={colors.frontend.foreground}
              >
                {skill}
              </Pill>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2 mb-8 flex-wrap">
            {config.about.mySkills.backend.map((skill, index) => (
              <Pill
                key={index}
                color={colors.backend.background}
                textColor={colors.backend.foreground}
              >
                {skill}
              </Pill>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2 mb-8 flex-wrap">
            {config.about.mySkills.databases.map((skill, index) => (
              <Pill
                key={index}
                color={colors.databases.background}
                textColor={colors.databases.foreground}
              >
                {skill}
              </Pill>
            ))}
          </div>
          <div className="flex flex-row items-center gap-2 mb-8 flex-wrap">
            {config.about.mySkills.devopsAndOthers.map((skill, index) => (
              <Pill
                key={index}
                color={colors.devopsAndOthers.background}
                textColor={colors.devopsAndOthers.foreground}
              >
                {skill}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default AboutSection;
