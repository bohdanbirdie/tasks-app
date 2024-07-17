import { TaskItem } from "@/data/entities";

export const Item: React.FC<{ item: TaskItem }> = ({ item }) => {
  return (
    <li>
      <button className="w-full p-2 bg-primary-foreground rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring">
        <span className="text-balance leading-4">{item.name}</span>
      </button>
    </li>
  );
};
