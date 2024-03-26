import { useEffect, useState } from "react";

import { SideMenu } from "@/components/SideMenu";
import { Tablet } from "@/components/Tablet";
import { Progress } from "@/components/ui/progress";

import Bygden from "./assets/Bygden.png";
import { PageContainer } from "./components/Pages";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const progress = setInterval(
      () => setProgress((oldProgress) => oldProgress + 1),
      10,
    );
    const timeout = setTimeout(() => {
      setFade(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
      clearInterval(progress);
    };
  }, [setFade]);

  return (
    <Tablet>
      <div
        className={`fixed rounded-md w-[calc(80vw-3.7rem)] h-[calc(70vh-3.8rem)] overflow-hidden z-50 bg-black transition-all duration-1000 ${fade ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className={`flex flex-col justify-center items-center h-full -mt-6`}
        >
          <img src={Bygden} alt="Logo" height="20%" width="20%" />
          <Progress value={progress} className="w-[20%] bg-neutral-800" />
        </div>
      </div>
      <section className="inline-grid grid-cols-10 h-full w-full">
        <div className="col-span-3 overflow-y-scroll">
          <SideMenu />
        </div>
        <div className="p-4 col-span-7 overflow-y-scroll">
          <PageContainer />
        </div>
      </section>
    </Tablet>
  );
};

export { App };
