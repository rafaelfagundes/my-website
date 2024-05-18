"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import ContentContainer from "@/components/ui/content-container";
import config from "@/lib/config";
import { calculateYearsOfExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

function RolesSection() {
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <div className="w-full" id="about">
      <AuroraBackground className="pb-2">
        <ContentContainer>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="text-4xl lg:text-5xl xl:text-6xl font-medium text-white text-center mb-2 tracking-tight">
              {`${yearsOfExperience}+ ${
                yearsOfExperience > 1 ? `years` : `year`
              }`}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="font-light text-2xl lg:text-3xl xl:text-4xl text-neutral-200 tracking-tighter">
              {config.roles.title}
            </div>
          </motion.div>
          <div className="h-8 sm:h-16"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10">
            {config.roles.roles.map((role, index) => (
              <motion.div
                initial={{ opacity: 0.0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index / 10 + 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center"
              >
                <BackgroundGradient
                  className={`rounded-[22px] max-w-sm p-4 sm:p-10 bg-black min-h-full`}
                  key={role.title}
                >
                  <RoleIcon
                    icon={role.image}
                    startColor={role.startColor}
                    endColor={role.endColor}
                  />
                  <p className="text-base xl:text-xl font-medium text-white mt-6 mb-3">
                    {role.title}
                  </p>

                  <p className="text-sm xl:text-base text-gray-400 leading-6">
                    {role.description}
                  </p>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </ContentContainer>
      </AuroraBackground>
    </div>
  );
}

export default RolesSection;

interface RoleIconProps {
  icon: React.ReactNode;
  startColor: string;
  endColor: string;
}
function RoleIcon({ icon, startColor, endColor }: RoleIconProps) {
  return (
    <div
      className="w-24 h-24 rounded-2xl flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom left, ${startColor}, ${endColor})`,
      }}
    >
      {icon}
    </div>
  );
}
