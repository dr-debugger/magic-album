import AuthguardWithLayout from "./layouts/guards/AuthguardWithLayout";
import Album from "./pages/Album";
import Error from "./pages/Error";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { AuthLayout } from "./context/AuthContext";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <AuthguardWithLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "album",
            element: <Album />,
          },
        ],
      },
      {
        path: "/",
        element: <Login />,
        errorElement: <Error />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);
