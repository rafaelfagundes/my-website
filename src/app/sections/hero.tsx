"use client";
import CustomButton from "@/components/custom/button";
import { HeroPrimaryButton } from "@/components/custom/hero-primary-button";
import ContentContainer from "@/components/ui/content-container";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import animations from "@/lib/animations";
import { motion } from "framer-motion";
import config from "../../lib/config";

function HeroSection() {
  return (
    <ContentContainer>
      <div className="grid sm:grid-cols-5 grid-cols-1 items-center gap-5">
        <motion.img
          {...animations.hero.avatarMobile}
          className="col-span-2 self-end sm:hidden mx-auto px-0 py-2"
          src={config.hero.avatar.img}
          alt={config.hero.avatar.alt}
        />

        <div className="col-span-1 sm:col-span-3">
          <motion.div className="flex flex-row space-x-2 items-center">
            <motion.h1
              {...animations.hero.tagline.hi}
              className="font-bold text-5xl lg:text-7xl tracking-tighter mt-5"
            >
              {config.hero.tagline.hi}
            </motion.h1>
            <motion.h1
              {...animations.hero.tagline.firstLine}
              className="font-bold text-5xl lg:text-7xl tracking-tighter mt-5"
            >
              {config.hero.tagline.firstLine}
            </motion.h1>
          </motion.div>
          <motion.h1
            {...animations.hero.tagline.secondLine}
            className="py-4 pr-2 font-bold text-6xl lg:text-8xl tracking-tighter bg-gradient-to-r from-indigo-400 to-cyan-400 inline-block text-transparent bg-clip-text"
          >
            {config.hero.tagline.secondLine}
          </motion.h1>
          <motion.p
            {...animations.hero.bio}
            className="text-base lg:text-xl max-w-xl text-foreground opacity-60 lg:mt-6 lg:mb-12 mb-8 mt-2"
          >
            {config.hero.bio}
          </motion.p>
          <div className="flex flex-row space-x-3 items-center my-5">
            <HeroPrimaryButton {...animations.hero.buttons.primary}>
              {config.hero.buttons.primary}
            </HeroPrimaryButton>
            <CustomButton
              {...animations.hero.buttons.secondary}
              variant="secondary"
            >
              {config.hero.buttons.secondary}
            </CustomButton>
          </div>
        </div>
        <motion.img
          {...animations.hero.avatar}
          className="col-span-2 hidden sm:block"
          src={config.hero.avatar.img}
          alt={config.hero.avatar.alt}
        />
      </div>
      <div className="h-6 sm:h-12"></div>
      <motion.div {...animations.hero.skills} className="relative w-full h-50">
        <InfiniteMovingCards
          speed="slow"
          items={config.hero.featuredSkills}
        ></InfiniteMovingCards>
      </motion.div>
    </ContentContainer>
  );
}

export default HeroSection;
