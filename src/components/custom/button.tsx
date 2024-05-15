import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function CustomButton({ ...props }) {
  return (
    <Button
      className={cn(
        "h-12 w-44 text-lg font-medium",
        props.className,
        props.cta &&
          "bg-accent-foreground hover:bg-accent-foreground hover:opacity-90"
      )}
      {...props}
    ></Button>
  );
}

export default CustomButton;
