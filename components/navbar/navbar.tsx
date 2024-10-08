"use client";

import { Button } from "@/components/ui/button";

import { useTheme } from "next-themes";

import { PlusIcon, ChevronDown, LogOut, Moon, Sun } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { UserButton } from "@clerk/nextjs";
export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between shadow-md items-center p-2">
      <UserButton />
      <Popover>
        <PopoverTrigger>
          <Button variant="ghost" className="border h-6 rounded-full px-2">
            <p className="text-xs">Programming</p>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[164px] p-1">
          <div className="flex flex-col gap-1">
            <Button variant="ghost" className="flex justify-start">
              <p className="text-xs">JavaScript</p>
            </Button>
            <Button variant="ghost" className="flex justify-start">
              <p className="text-xs">TypeScript</p>
            </Button>
            <Button variant="ghost" className="flex justify-start">
              <p className="text-xs">Python</p>
            </Button>
            <Button variant="ghost" className="flex justify-start">
              <p className="text-xs">Java</p>
            </Button>
            <Button variant="ghost" className="flex justify-start">
              <p className="text-xs">C#</p>
            </Button>
            <Button variant="ghost" className="flex justify-start">
              <PlusIcon className="w-4 h-4" />
              <p className="text-xs">New</p>
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex gap-2">
        <Button variant="ghost" className="border px-2">
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>

          <PopoverContent className="w-[164px] p-1">
            <div className="flex flex-col gap-1">
              <Button
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 justify-start"
              >
                <LogOut className="w-4 h-4" />
                <p className="text-xs">Logout</p>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

