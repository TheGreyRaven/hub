import { useShallow } from "zustand/react/shallow";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/lib/zustand";
import { IconCash, IconCoins, IconMoneybag } from "@tabler/icons-react";

const Info = () => {
  const { totalSpent, spentCoins, coins } = useStore(
    useShallow((state) => ({
      totalSpent: state.totalSpent,
      spentCoins: state.spentCoins,
      coins: state.coins,
    })),
  );

  return (
    <div className="w-full">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Spenderat</CardTitle>
            <IconCash className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Intl.NumberFormat("sv-SE", {
                style: "currency",
                currency: "SEK",
                notation: "standard",
              }).format(totalSpent)}
            </div>
            <p className="text-xs text-muted-foreground">
              Hur mycket du har spenderat
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Använt</CardTitle>
            <IconCoins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{spentCoins}</div>
            <p className="text-xs text-muted-foreground">
              Hur många coins du har använt
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Oanvänt</CardTitle>
            <IconMoneybag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{coins}</div>
            <p className="text-xs text-muted-foreground">
              Hur många coins du inte har spenderat
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-4" />

      <div className="w-full"></div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="w-full">
            <div className="container flex flex-col justify-center mb-4">
              <h2 className="text-3xl font-bold leading-none text-center">
                Vanliga frågor & svar
              </h2>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">
                Hur lång tid tar det att få mina coins?
              </h3>
              <Separator className="my-4" />
              <p>
                Så får din betalning har gått igenom Tebex och blivit godkänd så
                kommer dina coins bli tilldelad till dig.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Vad är coins?</h3>
              <Separator className="my-4" />
              <p>
                Coins är vår egna "valuta" som vi använder oss för att ge er
                möjlighet att fritt välja hur ni vill spendera era coins under
                fliken "Shop".
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Kan jag få återbetalning för coins?
              </h3>
              <Separator className="my-4" />
              <p>
                Vi erbjuder tyvärr inte några återbetalningar för köp utav eller
                förbrukning av coins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Kan jag spara mina coins?</h3>
              <Separator className="my-4" />
              <p>
                Ja, du kan spara dina coins hur länge du vill och även spendera
                dem hur och när du vill.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { Info };
