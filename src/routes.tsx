import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import LiveCasinoPage from "./pages/LiveCasinoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tournaments", element: <GameDetailPage /> },
      { path: "live-casino", element: <LiveCasinoPage /> },
      { path: "tournaments/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
