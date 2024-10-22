import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Plus } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex justify-between  items-center p-2 shadow-md">
      {/* left section */}
      <div className="flex items-center gap-x-2">
        <div className="w-10 h-10 bg-black rounded-md"></div>
        <Input type="text" placeholder="Search" className="w-full" />
      </div>

      {/* right section */}
      <div className="flex items-center gap-x-2">
        <Button size={"default"}>
          <Plus />
          <span className="ml-2">Create</span>
        </Button>

        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage
                sizes="24"
                src="https://github.com/unnatibamania.png"
                alt="@unnatibamania"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

