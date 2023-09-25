import React, { useState, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import ErrorContact from "./components/ErrorContact";
import Person from "./components/Person";
const Grocery = React.lazy(() => import("./components/Grocery"));
const About = React.lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // auth api call
  useEffect(() => {
    const data = { name: "Rohan" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          setUserName,
        }}
      >
        <div className="app ">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        errorElement: <ErrorContact />,
        children: [
          {
            path: "/contact/p1",
            element: <Person name={"p1"} />,
          },
          {
            path: "/contact/p2",
            element: <Person name={"p2"} />,
          },
          {
            path: "*",
            loader: () => {
              throw new Error("broken!");
            },
          },
        ],
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
