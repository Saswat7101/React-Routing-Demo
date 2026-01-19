import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import ProducstPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/products" element={<ProducstPage />} />
//   </Route>,
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProducstPage /> },
    ],
  },
]);

//const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
