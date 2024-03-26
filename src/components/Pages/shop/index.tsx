/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/lib/theme-provider";
import { fetcher } from "@/lib/utils";
import { TabsList } from "@radix-ui/react-tabs";
import { IconAlertTriangle, IconLoader } from "@tabler/icons-react";

const Shop = () => {
  const { theme } = useTheme();
  const { data, error, isLoading } = useSWR(
    "https://dashboard-tawny-ten.vercel.app/api/tebex/packages",
    fetcher,
  );

  if (isLoading) {
    return (
      <div className="min-h-[100%] w-full flex justify-center items-center">
        <IconLoader className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-[75%] h-full flex items-center justify-center">
        <Alert className="border-red-700">
          <IconAlertTriangle color="red" className="h-4 w-4" />
          <AlertTitle>Något gick fel!</AlertTitle>
          <AlertDescription>
            Vi kunde inte hämta tillgängliga alternativ, prova igen senare eller
            kontakta en administratör.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Tabs defaultValue={data[0]?.name ?? ""}>
        <TabsList
          className={`grid grid-flow-col dark:bg-tab_background_dark bg-card border-solid border dark:border-none border-settings_white_hover rounded-md`}
        >
          {data?.map((_category: any) => (
            <TabsTrigger
              value={_category?.name}
              key={_category.id}
              className={`${theme === "dark" ? "data-[state=active]:bg-tab_button_dark" : "data-[state=active]:bg-settings_white_hover"} data-[state=active]:text-white dark:text-white text-settings_white_hover`}
            >
              {_category?.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {data?.map((_data: any) => (
          <TabsContent value={_data?.name} key={_data?.name} className="w-full">
            <div className="max-h-[calc(70vh-8rem)] h-[calc(70vh-8rem)] overflow-y-scroll">
              <div className="grid grid-cols-2 gap-4 grid-flow-row">
                {_data.packages.map((_package: any) => {
                  return (
                    <div
                      className="w-full rounded-xl border bg-card text-card-foreground shadow"
                      key={_package.id}
                    >
                      <img
                        className="p-8 rounded-t-lg items-center mx-auto"
                        src={_package.image}
                        alt="product image"
                        width="40%"
                        height="40%"
                      />
                      <div className="px-5 pb-4">
                        <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                          {_package.name}
                        </h5>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {_package.total_price === 0
                              ? "Gratis"
                              : new Intl.NumberFormat("sv-SE", {
                                  style: "currency",
                                  currency: _package.currency,
                                }).format(_package.total_price)}
                          </span>
                          <Button className="px-5 py-2.5 text-center dark:text-white hover:bg-settings_white_hover/80 bg-settings_white_hover">
                            Läs mer
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export { Shop };
