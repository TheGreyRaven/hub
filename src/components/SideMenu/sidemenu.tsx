import { Pages } from "../Pages";
import { Profile } from "../Profile";

const SideMenu = () => {
  return (
    <section className="h-full w-4/12 p-4 border-r-2">
      <p className="text-2xl font-extrabold mb-4">Välkommen!</p>
      <Profile />
      <Pages />
    </section>
  );
};

export { SideMenu };
