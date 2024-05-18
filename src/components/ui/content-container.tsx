import React from "react";

function ContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full py-10 p-6 sm:py-12 sm:px-12">
      {children}
    </div>
  );
}

export default ContentContainer;
