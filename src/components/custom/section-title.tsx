function SectionTitle({
  children,
  color = "#000000",
  textColor = "#020122",
}: {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
}) {
  return (
    <div className="text-3xl xl:text-4xl font-bold text-foreground mb-4 w-fit">
      <h2 className="tracking-tighter" style={{ color: textColor }}>
        {children}
      </h2>
      <div className="h-2 w-ful mt-3" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default SectionTitle;
