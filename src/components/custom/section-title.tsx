function SectionTitle({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 w-fit">
      <h2>{children}</h2>
      <div className="h-2 w-ful mt-3" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default SectionTitle;
