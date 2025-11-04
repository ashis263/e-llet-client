import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { teal } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: teal,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex font-roboto justify-between ">
        <Sidebar />
        <div className="absolute right-0 w-4/5">
          <Outlet/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
