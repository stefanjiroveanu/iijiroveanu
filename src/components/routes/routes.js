import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../../views/Homepage";
import { NotFound } from "../../views/NotFound";
import AboutPellets from "../../views/About";
import Gallery from "../../views/Gallery";
import Contact from "../../views/Contact";
import Products from "../../views/PalletsPage";
import Cart from "../Cart";

const Routes = () => {

  const routesForPublic = [
    {
      path: "/home",
      element: (
            <Homepage />
      ),
    },
    {
      path: "/",
      element: (
            <Homepage />
      ),
    },
    {
      path: "/about",
      element: (
            <AboutPellets />
      ),
    },
    {
      path: "/gallery",
      element: (
            <Gallery />
      ),
    },
    {
      path: "/contact",
      element: (
            <Contact />
      ),
    },
    {
      path: "/cumpara",
      element: (
        <Products />
      )
    },
    {
      path: "/cart",
      element: (
        <Cart />
      )
    }
  ];

  const notFoundRoute = {
    path: "*",
    element: <NotFound />,
  };

  const router = createBrowserRouter([
    ...routesForPublic,
    notFoundRoute,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;