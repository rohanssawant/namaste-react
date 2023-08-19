import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = React.lazy(() => import("./components/Grocery"));
const About = React.lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3>Loading.....</h3>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/res/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading.....</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
