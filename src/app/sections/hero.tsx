import CustomButton from "@/components/custom/button";
import ContentContainer from "@/components/ui/content-container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FileTs } from "@phosphor-icons/react/dist/ssr";
import config from "../../lib/config";

function HeroSection() {
  return (
    <ContentContainer>
      <div className="flex flex-center justify-center min-h-[520px]">
        <div className="grid sm:grid-cols-5 grid-cols-1 items-center gap-5 ">
          <img
            className="col-span-2 self-end sm:hidden mx-auto px-0 py-2"
            src={config.hero.avatar.img}
            alt={config.hero.avatar.alt}
          />
          <div className="col-span-1 sm:col-span-3">
            <h1 className="font-bold text-4xl sm:text-7xl tracking-tighter">
              {config.hero.tagline.firstLine}
            </h1>
            <h1 className="-mt-2 py-4 pr-2 font-bold text-4xl sm:text-8xl tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-400 inline-block text-transparent bg-clip-text">
              {config.hero.tagline.secondLine}
            </h1>
            <p className="text-lg sm:text-xl max-w-xl text-foreground opacity-60 sm:mt-4 sm:mb-12 mb-8 mt-2">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-row space-x-3 items-center">
              <CustomButton cta={true}>
                {config.hero.buttons.primary}
              </CustomButton>
              <CustomButton variant="outline">
                {config.hero.buttons.secondary}
              </CustomButton>
            </div>
            <div className="flex flex-row space-x-2 items-center sm:mt-10 mt-6">
              <FileTs size={65} weight="light" className="w-16" />
              <p className="max-w-80 opacity-80 font-semibold sm:text-base text-sm">
                {config.hero.bio.text}
              </p>
            </div>
          </div>
          <img
            className="col-span-2 self-end hidden sm:block"
            src={config.hero.avatar.img}
            alt={config.hero.avatar.alt}
          />
        </div>
      </div>
      <div className="h-6 sm:h-12"></div>
      <InfiniteMovingCards
        speed="slow"
        items={config.hero.featuredSkills}
      ></InfiniteMovingCards>
    </ContentContainer>
  );
}

export default HeroSection;
