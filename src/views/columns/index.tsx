import { ModeToggle } from "@/components/mode-toggle";
import { Column } from "@/components/Column";
import { useTasksQuery } from "./tasks.gql.generated";

export const Columns: React.FC = () => {
  const { data, loading } = useTasksQuery();
  console.log("data, loading: ", data, loading);
  return (
    <div className="flex gap-4">
      <Column />
      <Column />
      <Column />
      <ModeToggle />
    </div>
  );
};
