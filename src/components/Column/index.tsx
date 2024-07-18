import React from "react";
import { Plus } from "lucide-react";

import * as Types from "@/gql/graphql";
import { Button } from "@/components/ui/button";
import { Item } from "../Item";

export const Column: React.FC<{ column: Types.TasksColumn }> = ({ column }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow min-w-64 p-2 flex flex-col gap-4">
      <h2 className="text-lg leading-4 font-semibold tracking-tight p-2">
        {column.title}
      </h2>

      {!!column.tasks.length && (
        <ul className="flex flex-col gap-2">
          {column.tasks.map((task) => (
            <li key={task.id}>
              <Item item={task} />
            </li>
          ))}
        </ul>
      )}

      <Button variant="secondary">
        <Plus className="mr-2 h-4 w-4" /> Add card
      </Button>
    </div>
  );
};
