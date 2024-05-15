import React from "react";

function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center max-w-screen-2xl w-full p-6 sm:p-12">
      {children}
    </div>
  );
}

export default ContentContainer;
