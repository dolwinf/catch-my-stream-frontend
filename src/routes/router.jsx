import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DownloadPage from "../pages/DownloadPage";
import Disclaimer from "../pages/DisclaimerPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <DownloadPage />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
    ],
  },
]);

export default router;
