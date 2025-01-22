import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./components/Dashboard";
import RegisteredCalling from "./components/RegisteredCalling";
import RefreshCallLogs from "./components/RefreshCallLogs";
import ReferCv from "./components/ReferCv";
import { MENU_IDS } from "./constant";
import ReadyToPay from "./components/ReadyToPay";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/ready-to-pay",
            element: <ReadyToPay />,
          },
        ],
      },
      {
        path: `/${MENU_IDS.REGISTERED_CALLING}`,
        element: <RegisteredCalling />,
      },
      {
        path: `/${MENU_IDS.REFRESH_CALL_LOGS}`,
        element: <RefreshCallLogs />,
      },
      {
        path: `/${MENU_IDS.REFER_CV}`,
        element: <ReferCv />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
