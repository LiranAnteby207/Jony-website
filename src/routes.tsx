import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LiveCasinoPage from "./pages/LiveCasinoPage";
import TournamentsPage from "./pages/TournamentsPage";
import TournamentsSpecificPage from "./pages/TournamentsSpecificPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "tournaments", element: <TournamentsPage /> },
      { path: "live-casino", element: <LiveCasinoPage /> },
      { path: "tournaments/:id", element: <TournamentsSpecificPage /> },
    ],
  },
]);

export default router;
