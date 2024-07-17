import { Columns } from "./views/columns";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="p-4">
        <Columns />
      </div>
    </ThemeProvider>
  );
}

export default App;
