import { useStore } from "@/lib/zustand";
import { AvatarImage, Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { useShallow } from "zustand/react/shallow";

const Profile = () => {
  const { avatarUrl, coins } = useStore(
    useShallow((state) => ({ avatarUrl: state.avatarUrl, coins: state.coins })),
  );

  return (
    <Card className="border-none">
      <CardHeader>
        <section className="flex">
          <Avatar>
            <AvatarImage src={avatarUrl ?? ""} />
            <AvatarFallback>OB</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <CardTitle>Oscar Bråberg</CardTitle>
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
