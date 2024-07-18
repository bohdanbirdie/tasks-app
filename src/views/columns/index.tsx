import { ModeToggle } from "@/components/mode-toggle";
import { Column } from "@/components/Column";
import { useColumnsQuery } from "./tasks.gql.generated";

export const Columns: React.FC = () => {
  const { data } = useColumnsQuery();

  return (
    <div className="flex gap-4">
      {data?.columns.map((column) => <Column column={column} />)}
      <ModeToggle />
    </div>
  );
};
