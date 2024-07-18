import { TaskItem } from "@/gql/graphql";

export const Item: React.FC<{ item: TaskItem }> = ({ item }) => {
  return (
    <button className="w-full p-2 bg-primary-foreground rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:ring-2 hover:ring-ring">
      <span className="text-balance leading-4">{item.title}</span>
    </button>
  );
};
