import { useTheme } from "@/lib/theme-provider";

const Tablet = ({ children }: { children?: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[80vw] h-[70vh] p-6 border-4 border-gray-400 rounded-2xl bg-tablet_frame overflow-hidden">
        <div
          className={`flex h-full rounded-xl border-solid border-2 border-screen_frame ${theme === "light" ? "bg-settings_white" : "bg-black"}`}
        >
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export { Tablet };
