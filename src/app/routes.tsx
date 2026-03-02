import { createBrowserRouter, Outlet } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shorts } from "./pages/Shorts";
import { Details } from "./pages/Details";
import { Player } from "./pages/Player";
import { Search } from "./pages/Search";
import { Account } from "./pages/Account";
import { Downloads } from "./pages/Downloads";
import { PrototypeProvider } from "./context/PrototypeContext";
import { PrototypeSwitcher } from "./components/PrototypeSwitcher";

function Root() {
  return (
    <PrototypeProvider>
      <Outlet />
      <PrototypeSwitcher />
    </PrototypeProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: Home },
          { path: "search", Component: Search },
          { path: "shorts", Component: Shorts },
          { path: "downloads", Component: Downloads },
          { path: "account", Component: Account },
          { path: "details/:id", Component: Details },
          { path: "*", Component: Home },
        ],
      },
      // Player is outside Layout (fullscreen, no bottom nav)
      { path: "player/:id", Component: Player },
    ],
  },
]);