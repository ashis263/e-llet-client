import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const theme = createTheme({
  palette: {
    primary: teal,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex font-roboto">
        <Sidebar />
        <Outlet />
      </div>
      <div className="fixed bottom-10 flex justify-center left-[50vw] w-1/5">
        <Button
          className="p-5! font-semibold! flex items-center gap-2"
          variant="contained"
        >
          <span className="pt-0.5">Add Transaction</span>
          <AddCircleIcon/>
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
