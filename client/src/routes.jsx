import { createBrowserRouter, Router } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
