import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import ProducstPage from "./pages/Products";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <ProducstPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
