interface PillProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  textColor?: string;
}

function Pill({ children, className, color, textColor }: PillProps) {
  return (
    <div
      style={{
        backgroundColor: color || "#000000",
        color: textColor || "#FFFFFF",
      }}
      className={`px-3 py-1 rounded-full text-base font-semibold ${className} w-fit`}
    >
      {children}
    </div>
  );
}

export default Pill;
