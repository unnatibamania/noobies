import { Button } from "../ui/button";

import { Settings, ChevronLeft } from "lucide-react";

import { Logo } from "../logo/logo";

import { dashboardRoutes } from "@/utils/dashboard";

const Sidebar = () => {
  return (
    <aside className="w-64 border flex flex-col h-full justify-between p-4 gap-2 bg-white">
      <div className="gap-y-4 flex flex-col gap-4">
        <div className="flex gap-x-2 justify-between">
          <section className="gap-x-1 w-full flex items-center">
            <Logo />
            <span className="text-xl font-bold">Noobie</span>
          </section>

          <Button
            size={"icon"}
            className="border h-6 aspect-square items-center bg-transparent text-black flex w-6"
          >
            <ChevronLeft />
          </Button>
        </div>
        <hr className="bg-gray-700" />

        <div className="flex flex-col gap-2">
          {dashboardRoutes.map((route) => (
            <Button variant="ghost" key={route.id} className="justify-start">
              <route.Icon size={24} />{" "}
              <span className="ml-2">{route.label}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="ghost" className="border justify-start">
          <Settings size={28} /> <span className="ml-2">Settings</span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

