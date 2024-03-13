import { SideMenu } from "@/components/SideMenu";
import { Tablet } from "@/components/Tablet";
import { PageContainer } from "./components/Pages";

const App = () => {

  return (
    <Tablet>
      <section className="flex w-full h-full">
        <SideMenu />
        <div className="p-6 w-full h-full">
          <PageContainer />
        </div>
      </section>
    </Tablet>
  )
}

export { App };
