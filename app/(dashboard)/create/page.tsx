"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Kbd } from "@/components/kbd/kbd";

import { CardsCreationFlow } from "@/components/creation-flow/cards-creation-flow/CardsCreationFlow";

const CreatePage = () => {
  const [selectedPath, setSelectedPath] = useState<"cards" | "csv" | null>(
    null
  );

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {selectedPath === null ? (
        <section className="min-w-4xl min-h-48 gap-y-4 items-center flex flex-col mx-auto backdrop-blur-sm border border-zinc-200 border-dashed rounded-md p-4">
          <div>
            <h1 className="text-2xl font-bold">You&apos;re one click away </h1>
            <p className="text-sm text-gray-500">
              Create your first project to get started
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <Button
              variant={"default"}
              onClick={() => setSelectedPath("cards")}
            >
              <Kbd>⌘ P</Kbd>

              <span className="ml-2">Create cards</span>
            </Button>
            <Button variant={"outline"} onClick={() => setSelectedPath("csv")}>
              <Kbd>⌘ U</Kbd>

              <span className="ml-2">Upload CSV</span>
            </Button>
          </div>
        </section>
      ) : selectedPath === "cards" ? (
        <CardsCreationFlow />
      ) : null}
    </div>
  );
};

export default CreatePage;

