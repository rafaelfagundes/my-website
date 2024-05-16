"use client";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import config from "@/lib/config";
import { calculateYearsOfExperience } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

function RolesSection() {
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <div className="w-full">
      <AuroraBackground className="px-6 py-14 sm:p-20">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center"
        >
          <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-4">
            {`${yearsOfExperience}+ ${
              yearsOfExperience > 1 ? `years` : `year`
            }`}
          </div>
          <div className="font-light text-2xl lg:text-3xl xl:text-4xl text-neutral-200">
            {config.roles.title}
          </div>
        </motion.div>
        <div className="h-8 sm:h-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-10">
          {config.roles.roles.map((role, index) => (
            <BackgroundGradient
              className={`rounded-[22px] max-w-sm p-4 sm:p-10 bg-black min-h-full`}
              key={role.title}
            >
              <RoleIcon
                icon={role.image}
                startColor={role.startColor}
                endColor={role.endColor}
              />
              <p className="text-base xl:text-xl font-medium text-white mt-4 mb-2">
                {role.title}
              </p>

              <p className="text-sm xl:text-base text-gray-400 leading-6">
                {role.description}
              </p>
            </BackgroundGradient>
          ))}
        </div>
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
