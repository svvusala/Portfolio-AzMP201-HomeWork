import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Profile from "./components/Pages/Profile";
import Register from "./components/Pages/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Pages/SearchPage";
import Navbar from "./components/Pages/Layout/Navbar";
import Layout from "./components/Pages/Layout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },

  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/search",
  //   element: <Search />,
  // },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
