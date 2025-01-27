import { createBrowserRouter } from "react-router-dom";
import { APP_ROUTE_PATH } from "./route-path";
import About from "../components/About/About.jsx";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Layout from "../Layout/Layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: APP_ROUTE_PATH.ABOUT,
        element: <About />,
      },
      {
        path: APP_ROUTE_PATH.PROJECTS,
        element: <Projects />,
      },
      {
        path: APP_ROUTE_PATH.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);
