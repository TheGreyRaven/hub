import {
  IconBackpack,
  IconGraph,
  IconMoonFilled,
  IconNews,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/zustand";
import { useShallow } from "zustand/react/shallow";
import { useTheme } from "@/lib/theme-provider";

const Pages = () => {
  const { currentPage, setPage } = useStore(
    useShallow((state) => ({
      currentPage: state.currentPage,
      setPage: state.setPage,
    })),
  );

  const { setTheme, theme } = useTheme();

  return (
    <section className="mt-8">
      <Card className="border-none mb-8 overflow-hidden">
        <Button
          variant="ghost"
          className={`items-center p-2 m-0 w-full h-full rounded-none justify-normal font-normal hover:text-white
                    ${currentPage === "news" && "text-white bg-settings_white_hover"}`}
          onClick={() => setPage("news")}
        >
          <div className="h-fit w-fit bg-sky-700 rounded-md p-[2px] ml-2">
            <IconNews color="white" />
          </div>

          <p className="text-md ml-2">Nyheter</p>
        </Button>

        <Separator />

        <Button
          variant="ghost"
          className={`items-center p-2 m-0 w-full h-full rounded-none justify-normal font-normal hover:text-white
                    ${currentPage === "shop" && "text-white bg-settings_white_hover"}`}
          onClick={() => setPage("shop")}
        >
          <div className="h-fit w-fit bg-green-700 rounded-md p-[2px] ml-2">
            <IconShoppingCart color="white" />
          </div>

          <p className="text-md ml-2">Shop</p>
        </Button>

        <Separator />

        <Button
          variant="ghost"
          className={`items-center p-2 m-0 w-full h-full rounded-none justify-normal font-normal hover:text-white
                    ${currentPage === "storage" && "text-white bg-settings_white_hover"}`}
          onClick={() => setPage("storage")}
        >
          <div className="h-fit w-fit bg-amber-600 rounded-md p-[2px] ml-2">
            <IconBackpack color="white" />
          </div>

          <p className="text-md ml-2">Förråd</p>
        </Button>

        <Separator />

        <Button
          variant="ghost"
          className={`items-center p-2 m-0 w-full h-full rounded-none justify-normal font-normal hover:text-white
            ${currentPage === "stats" && "text-white bg-settings_white_hover"}`}
          onClick={() => setPage("stats")}
        >
          <div className="h-fit w-fit bg-indigo-600 rounded-md p-[2px] ml-2">
            <IconGraph color="white" />
          </div>

          <p className="text-md ml-2">Statistik</p>
        </Button>
      </Card>

      <Card className="border-none py-2 px-4">
        <div className="flex items-center">
          <div className="h-fit w-fit bg-slate-800 rounded-md flex-1/3 p-[2px]">
            <IconMoonFilled color="white" />
          </div>

          <p className="text-md flex-grow ml-2">Mörkt läge</p>

          <Switch
            className="flex-1/3"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            checked={theme === "light" ? false : true}
          />
        </div>
      </Card>

      <Card className="border-none overflow-hidden mt-8">
        <Button
          variant="ghost"
          className={`items-center p-2 m-0 w-full h-full rounded-none justify-normal font-normal hover:text-white`}
        >
          <div className="h-fit w-fit bg-red-800 rounded-md p-[2px] ml-2">
            <IconX color="white" />
          </div>

          <p className="text-md ml-2">Avsluta</p>
        </Button>
      </Card>
    </section>
  );
};

export { Pages };
