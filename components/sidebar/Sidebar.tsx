import { Button } from "../ui/button";

import { Home, FilesIcon, GitGraph, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 border flex flex-col justify-between p-2 gap-2 bg-white">
      <div className="flex flex-col gap-2">
        <Button variant="ghost" className="border justify-start">
          <Home size={18} /> <span className="ml-2">Home</span>
        </Button>

        <Button variant="ghost" className="border justify-start">
          <FilesIcon size={18} /> <span className="ml-2">Library</span>
        </Button>

        <Button variant="ghost" className="border justify-start">
          <GitGraph size={18} /> <span className="ml-2">Analytics</span>
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="ghost" className="border justify-start">
          <Settings size={18} /> <span className="ml-2">Settings</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

