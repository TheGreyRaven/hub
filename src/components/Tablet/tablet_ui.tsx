import { useTheme } from "@/lib/theme-provider";

const Tablet = ({ children }: { children?: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="box-border h-3/4 w-2/3 p-6 border-4 border-gray-400 rounded-2xl bg-tablet_frame">
        <section
          className={`box-border h-full w-full rounded-xl border-solid border-2 border-screen_frame ${theme === "light" ? "bg-settings_white" : "bg-black"}`}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export { Tablet };
