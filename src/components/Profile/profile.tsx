import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/lib/zustand";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const Profile = () => {
  const { avatarUrl, coins, charName } = useStore(
    useShallow((state) => ({
      avatarUrl: state.avatarUrl,
      coins: state.coins,
      charName: state.charName,
    })),
  );

  return (
    <Card className="border-none">
      <CardHeader>
        <section className="flex">
          <Avatar>
            <AvatarImage src={avatarUrl ?? ""} />
            <AvatarFallback>N/A</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <CardTitle>{charName}</CardTitle>
            <CardDescription>
              Du har: <span className="font-bold">{coins}</span> coins!
            </CardDescription>
          </div>
        </section>
      </CardHeader>
    </Card>
  );
};

export { Profile };
