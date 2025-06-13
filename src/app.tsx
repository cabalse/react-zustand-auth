import { createBrowserRouter, RouterProvider } from "react-router";
import RootPage from "./components/pages/root-page";
import LandingPage from "./components/pages/landing-page";
import Authenticate from "./components/pages/authenticate";
import TestPage from "./components/pages/test-page";

const router = createBrowserRouter([
  {
    path: "test",
    Component: TestPage,
  },
  {
    path: "landingpage",
    Component: LandingPage,
  },
  {
    path: "",
    Component: Authenticate,
    children: [
      {
        index: true,
        Component: RootPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
