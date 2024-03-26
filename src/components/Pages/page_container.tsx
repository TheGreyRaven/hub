import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/lib/zustand";

import { NotFound } from "./404";
import { Info } from "./info";
// import { News } from "./news";
import { Shop } from "./shop";
import { Storage } from "./storage";

const PageContainer = () => {
  const { currentPage } = useStore(
    useShallow((state) => ({ currentPage: state.currentPage })),
  );

  switch (currentPage) {
    // case "news":
    //   return <News />;

    case "shop":
      return <Shop />;

    case "storage":
      return <Storage />;

    case "stats":
      return <Info />;

    default:
      return <NotFound />;
  }
};

export { PageContainer };
