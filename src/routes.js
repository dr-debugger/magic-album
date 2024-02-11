import AuthguardWithLayout from "./layouts/guards/AuthguardWithLayout";
import Error from "./pages/Error";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { AuthLayout } from "./context/AuthContext";
import Album from "./pages/album";
import CreateAlbum from "./pages/create_album";
import AlbumInfo from "./pages/album_info";

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
          {
            path: "album/:id",
            element: <AlbumInfo />,
          },
          {
            path: "create-album",
            element: <CreateAlbum />,
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
