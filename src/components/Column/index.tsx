import React from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TaskItem } from "@/data/entities";
import { Item } from "../Item";

const itemStub: TaskItem = {
  id: "1",
  name: "Item name",
  parentColumnId: "1",
};

export const Column: React.FC = () => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow min-w-64 p-2 flex flex-col gap-4">
      <h2 className="text-lg leading-4 font-semibold tracking-tight p-2">
        Column name
      </h2>

      <ul className="flex flex-col gap-2">
        <Item item={itemStub} />
        <Item item={itemStub} />
        <Item item={itemStub} />
        <Item item={itemStub} />
        <Item item={itemStub} />
      </ul>
      <Button variant="secondary">
        <Plus className="mr-2 h-4 w-4" /> Add card
      </Button>
    </div>
  );
};
