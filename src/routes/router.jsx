import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home/Home";
import Categories from "../components/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories",
        element: <Categories />
      }
    ]
  }
]);

export default router;