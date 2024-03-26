import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IconAlertTriangle } from "@tabler/icons-react";

const NotFound = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="w-[40%]">
        <Alert className="border-red-600">
          <IconAlertTriangle className="w-4 h-4 stroke-red-600" />
          <AlertTitle>Ajdå!</AlertTitle>
          <AlertDescription>
            Något gick fel och vi kunde inte ladda sidan du försökte nå.
            Kontakta en administratör om detta problemet återuppstår!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export { NotFound };
