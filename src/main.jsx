import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Queries from "./Pages/Queries";
import RecommandationsForMe from "./Pages/RecommandationsForMe";
import MyQueries from "./Pages/MyQueries";
import MyRecommandations from "./Pages/MyRecommandations";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Provider/AuthProvider";
import AddQuery from "./Pages/AddQuery";
import PrivateRoute from "./Private/PrivateRoute";
import QuiryDetails from "./Pages/QuiryDetails";
import Update from "./Pages/Update";
import AboutUs from "./Pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/queries",
    element: <Queries />,
    loader: () =>
      fetch("https://assignment-11-server-side-ebon.vercel.app/querycount"),
  },
  {
    path: "/querydetails/:id",
    element: <QuiryDetails />,
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-server-side-ebon.vercel.app/query/${params.id}`
      ),
  },
  {
    path: "/update/:id",
    element: <Update />,
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-server-side-ebon.vercel.app/query/${params.id}`
      ),
  },
  {
    path: "/addquery",
    element: (
      <PrivateRoute>
        <AddQuery />
      </PrivateRoute>
    ),
  },
  {
    path: "/recommandationsforme",
    element: <RecommandationsForMe />,
  },
  {
    path: "/myqueries",
    element: (
      <PrivateRoute>
        <MyQueries />
      </PrivateRoute>
    ),
    loader: () =>
      fetch("https://assignment-11-server-side-ebon.vercel.app/query"),
  },
  {
    path: "/myrecommandations",
    element: <MyRecommandations />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
