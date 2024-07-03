import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

function CustomButton(props: any) {
  return (
    <motion.div {...props}>
      <Button
        className={cn(
          "lg:h-12 lg:px-8 h-10 px-6 text-base lg:text-lg font-medium",
          props.className,
          props.cta &&
            "bg-accent-foreground hover:bg-accent-foreground hover:opacity-90"
        )}
        {...props}
      ></Button>
    </motion.div>
  );
}

export default CustomButton;
