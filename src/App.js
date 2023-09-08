import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Folder/Home";
import About from "./Folder/About";
import Portfolio from "./Folder/Portfolio";
import Contact from "./Folder/Contact";
import Layout from "./Folder/Layout";
import NotFound from "./Folder/NotFound";

export default function App() {
  let Routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}
