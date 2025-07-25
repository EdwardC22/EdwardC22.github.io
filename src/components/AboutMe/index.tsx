import React, { Suspense } from "react";
import Work from "./sections/Work";



const AboutMe = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
        <h2 className="text-3xl font-semibold mb-4 text-center ">About Me</h2>
        <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 place-itens-stretch gap-4">
            <Suspense>
              <Work />
            </Suspense>
        </div>
    </div>
  );
}
);

export default AboutMe;