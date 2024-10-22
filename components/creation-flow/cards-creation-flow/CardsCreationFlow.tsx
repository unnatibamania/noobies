import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/types/cards";

import {
  PlusIcon,
  TrashIcon,
  MenuIcon,
  ListIcon,
  AppWindow,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CardsCreationFlow = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [view, setView] = useState<"list" | "carousel">("carousel");

  const [cards, setCards] = useState<Card[]>([
    {
      id: "1",
      image: "",
      title: "",
      description: "",
    },
  ]);

  return (
    <div className="min-w-[480px] border flex flex-col gap-y-2">
      <Input
        placeholder="Project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />

      <Textarea
        placeholder="Project description"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
      />

      <div className="flex gap-x-2">
        <Button variant={"outline"} onClick={() => setView("list")}>
          <ListIcon /> <span className="ml-2">List</span>
        </Button>

        <Button variant={"outline"} onClick={() => setView("carousel")}>
          <AppWindow /> <span className="ml-2">Carousel</span>
        </Button>
      </div>

      {view === "list" ? (
        cards.map((card, index) => (
          <div key={card.id} className="relative flex flex-col gap-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">
                Card {index + 1}
              </span>

              <div className="flex gap-x-2">
                <Button size={"icon"} variant={"outline"}>
                  <TrashIcon />
                </Button>

                <Button size={"icon"} variant={"outline"}>
                  <MenuIcon />
                </Button>
              </div>
            </div>
            <Input placeholder="Card title" />
            <Textarea placeholder="Card description" />

            <Button
              size={"icon"}
              onClick={() =>
                setCards([
                  ...cards,
                  {
                    id: card.id + 1,
                    image: "",
                    title: "",
                    description: "",
                  },
                ])
              }
              className="absolute right-1/2 -bottom-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <PlusIcon />
            </Button>
          </div>
        ))
      ) : (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <div className="p-1">Card {index + 1}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
};

