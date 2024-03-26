import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/lib/theme-provider";
import { IconAlertTriangle } from "@tabler/icons-react";

const EmptyStorage = () => {
  return (
    <div className="min-h-[100%] w-full flex justify-center items-center">
      <div className="w-[40%]">
        <Alert>
          <IconAlertTriangle className="w-4 h-4 stroke-red-600" />
          <AlertTitle>Här var det tomt!</AlertTitle>
          <AlertDescription>
            Det finns ingenting att visa här just nu.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

const Storage = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full">
      <Tabs defaultValue="unused">
        <TabsList
          className={`p-0 h-[100%] grid w-full grid-cols-2 dark:bg-tab_background_dark bg-card border-solid border dark:border-none border-settings_white_hover rounded-md`}
        >
          <TabsTrigger
            value="unused"
            className={`${theme === "dark" ? "data-[state=active]:bg-tab_button_dark" : "data-[state=active]:bg-settings_white_hover"} data-[state=active]:text-white dark:text-white text-settings_white_hover`}
          >
            Tillgängliga
          </TabsTrigger>
          <TabsTrigger
            value="used"
            className={`${theme === "dark" ? "data-[state=active]:bg-tab_button_dark" : "data-[state=active]:bg-settings_white_hover"} data-[state=active]:text-white dark:text-white text-settings_white_hover`}
          >
            Förbrukade
          </TabsTrigger>
        </TabsList>
        <TabsContent value="unused" className="w-full">
          <div className="max-h-[calc(70vh-8rem)] h-[calc(70vh-8rem)] overflow-y-scroll">
            <EmptyStorage />
          </div>
        </TabsContent>
        <TabsContent value="used" className="w-full">
          <div className="max-h-[calc(70vh-8rem)] h-[calc(70vh-8rem)] overflow-y-scroll">
            <EmptyStorage />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { Storage };
