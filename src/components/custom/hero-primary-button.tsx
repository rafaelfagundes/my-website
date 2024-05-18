export function HeroPrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-12 w-44 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#dc3d2f,45%,#ff6136,55%,#dc3d2f)] bg-[length:200%_100%] px-6 font-medium text-lg text-white transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-red-50">
      {children}
    </button>
  );
}
