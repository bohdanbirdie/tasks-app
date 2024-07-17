import { ModeToggle } from "@/components/mode-toggle";
import { Column } from "@/components/Column";

export const Columns: React.FC = () => {
  return (
    <div className="flex gap-4">
      <Column />
      <Column />
      <Column />
      <ModeToggle />
    </div>
  );
};
