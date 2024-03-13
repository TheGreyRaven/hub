import { useStore } from "@/lib/zustand";
import { useShallow } from "zustand/react/shallow";
import { News } from "./news";
import { Shop } from "./shop";
import { Storage } from "./storage";
import { NotFound } from "./404";

const PageContainer = () => {
  const { currentPage } = useStore(
    useShallow((state) => ({ currentPage: state.currentPage })),
  );

  switch (currentPage) {
    case "news":
      return <News />;

    case "shop":
      return <Shop />;

    case "storage":
      return <Storage />;

    default:
      return <NotFound />;
  }
};

export { PageContainer };
