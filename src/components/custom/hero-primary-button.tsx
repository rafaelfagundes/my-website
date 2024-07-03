import { motion } from "framer-motion";

export function HeroPrimaryButton(props: any) {
  return (
    <motion.button
      {...props}
      className="inline-flex lg:h-12 lg:px-8 h-10 px-6 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#dc3d2f,45%,#ff6136,55%,#dc3d2f)] bg-[length:200%_100%] font-medium text-base lg:text-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-50"
    >
      {props.children}
    </motion.button>
  );
}
