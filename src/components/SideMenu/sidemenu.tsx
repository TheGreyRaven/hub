import { Pages } from "../Pages";
import { Profile } from "../Profile";

const SideMenu = () => {
  return (
    <div className="p-4 border-r-2 h-full">
      <p className="text-2xl font-extrabold mb-4">Välkommen!</p>
      <Profile />
      <div>
        <Pages />
      </div>
    </div>
  );
};

export { SideMenu };
